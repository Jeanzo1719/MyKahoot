<?php

declare(strict_types=1);

// Script de reinicio del leaderboard, pensado para ser lanzado por un
// Cron Job de Hostinger cada 2 horas (alineado a horas pares para que
// coincida con el "reset_at" que muestra leaderboard.php).
//
// hPanel -> Avanzado -> Cron Jobs permite dos formas de programarlo:
//   1) "Ejecutar un comando PHP": apunta directo a este archivo, se
//      corre por CLI y no necesita token.
//        0 */2 * * *  /usr/bin/php /home/USUARIO/public_html/api/reset_leaderboard.php
//   2) "Visitar una URL": si solo se puede dar una URL, protégela con
//      el reset_token definido en config.php:
//        https://TU-DOMINIO/api/reset_leaderboard.php?token=EL_TOKEN

require __DIR__ . '/db.php';

$isCli = PHP_SAPI === 'cli';

if (!$isCli) {
    header('Content-Type: application/json; charset=utf-8');

    $config = get_config();
    $token = $_GET['token'] ?? '';

    if (!hash_equals((string) $config['reset_token'], (string) $token)) {
        http_response_code(403);
        echo json_encode(['error' => 'Token inválido.']);
        exit;
    }
}

try {
    $pdo = get_pdo();
    $deleted = $pdo->exec('DELETE FROM players');
    $pdo->exec('ALTER TABLE players AUTO_INCREMENT = 1');

    $message = "Leaderboard reiniciado: {$deleted} registro(s) eliminado(s).";

    if ($isCli) {
        fwrite(STDOUT, $message . PHP_EOL);
    } else {
        echo json_encode(['ok' => true, 'message' => $message]);
    }
} catch (Throwable $e) {
    if ($isCli) {
        fwrite(STDERR, 'Error al reiniciar el leaderboard.' . PHP_EOL);
        exit(1);
    }

    http_response_code(500);
    echo json_encode(['error' => 'Error interno del servidor.']);
}
