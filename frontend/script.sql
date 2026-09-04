-- =============================================================
--  MyKahoot - Leaderboard schema
--  MySQL / MariaDB (compatible Hostinger)
-- =============================================================

CREATE DATABASE IF NOT EXISTS mykahoot
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mykahoot;

-- -------------------------------------------------------------
--  players: registro de jugadores de la partida
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS players (
    id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    session_id    VARCHAR(64)     NOT NULL,
    player_name   VARCHAR(60)     NOT NULL,
    player_score  SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    played_at     TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_session_score (session_id, player_score DESC),
    KEY idx_played_at (played_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
--  v_leaderboard: vista lista para el frontend
-- -------------------------------------------------------------
DROP VIEW IF EXISTS v_leaderboard;
CREATE VIEW v_leaderboard AS
SELECT
    id,
    player_name,
    player_score,
    played_at,
    ROW_NUMBER() OVER (ORDER BY player_score DESC, played_at ASC) AS player_position
FROM players;

-- -------------------------------------------------------------
--  Datos de ejemplo (opcional, puedes borrar)
-- -------------------------------------------------------------
INSERT INTO players (session_id, player_name, player_score) VALUES
  ('demo-001', 'Ana',     14),
  ('demo-001', 'Luis',    12),
  ('demo-001', 'Sofía',   16),
  ('demo-001', 'Pedro',   9),
  ('demo-001', 'María',   13);