<?php
// Copia este archivo a "config.php" (mismo directorio) y completa los
// datos reales de la base de datos MySQL de Hostinger.
//
// config.php NO se sube a git (ver .gitignore): contiene credenciales
// reales y solo debe existir en el servidor de Hostinger.

return [
    'host'     => 'localhost',
    'port'     => 3306,
    'database' => 'u413254724_juankahoot',
    'username' => 'u413254724_juan',
    'password' => 'CHANGE_ME',
    'charset'  => 'utf8mb4',

    // Token secreto para autorizar la llamada HTTP a reset_leaderboard.php
    // (solo hace falta si el cron de Hostinger se configura como "visitar URL"
    // en vez de "ejecutar script PHP"). Genera uno propio, no dejes este valor.
    'reset_token' => 'CHANGE_ME_TOO',
];
