<?php

declare(strict_types=1);

require __DIR__ . '/db.php';

const RESET_WINDOW_SECONDS = 7200; // 2 horas, debe coincidir con el cron de reset_leaderboard.php
const MAX_PLAYER_NAME_LENGTH = 60;
const MAX_SCORE = 200;
const LEADERBOARD_LIMIT = 10;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

try {
    $pdo = get_pdo();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        submit_score($pdo);
    } else {
        send_leaderboard($pdo);
    }
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error interno del servidor.']);
}

function next_reset_at(): int
{
    return (intdiv(time(), RESET_WINDOW_SECONDS) + 1) * RESET_WINDOW_SECONDS;
}

function send_leaderboard(PDO $pdo): void
{
    $stmt = $pdo->query(
        'SELECT player_name, player_score
         FROM players
         ORDER BY player_score DESC, played_at ASC
         LIMIT ' . LEADERBOARD_LIMIT
    );

    $players = [];
    foreach ($stmt->fetchAll() as $i => $row) {
        $players[] = [
            'position'     => $i + 1,
            'player_name'  => $row['player_name'],
            'player_score' => (int) $row['player_score'],
        ];
    }

    echo json_encode([
        'players'  => $players,
        'reset_at' => gmdate('c', next_reset_at()),
    ]);
}

function submit_score(PDO $pdo): void
{
    $body = json_decode(file_get_contents('php://input'), true);

    if (!is_array($body)) {
        http_response_code(400);
        echo json_encode(['error' => 'Cuerpo de la solicitud inválido.']);
        return;
    }

    $name = trim((string) ($body['player_name'] ?? ''));
    $score = $body['player_score'] ?? null;

    if ($name === '' || mb_strlen($name) > MAX_PLAYER_NAME_LENGTH) {
        http_response_code(400);
        echo json_encode(['error' => 'Nombre de jugador inválido.']);
        return;
    }

    if (!is_int($score) && !(is_string($score) && ctype_digit($score))) {
        http_response_code(400);
        echo json_encode(['error' => 'Puntaje inválido.']);
        return;
    }

    $score = (int) $score;

    if ($score < 0 || $score > MAX_SCORE) {
        http_response_code(400);
        echo json_encode(['error' => 'Puntaje fuera de rango.']);
        return;
    }

    $stmt = $pdo->prepare('INSERT INTO players (player_name, player_score) VALUES (:name, :score)');
    $stmt->execute(['name' => $name, 'score' => $score]);

    http_response_code(201);
    echo json_encode(['ok' => true]);
}
