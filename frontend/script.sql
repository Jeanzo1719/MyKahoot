-- =============================================================
--  MyKahoot - Leaderboard schema
--  MySQL / MariaDB (compatible Hostinger)
--
--  Importar directamente sobre la base de datos ya creada desde
--  hPanel (Hostinger no permite CREATE DATABASE a usuarios de
--  hosting compartido, la base ya debe existir y estar seleccionada
--  en phpMyAdmin antes de ejecutar este script).
-- =============================================================

CREATE TABLE IF NOT EXISTS players (
    id            INT UNSIGNED      NOT NULL AUTO_INCREMENT,
    player_name   VARCHAR(60)       NOT NULL,
    player_score  SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    played_at     TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_score (player_score DESC, played_at ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
