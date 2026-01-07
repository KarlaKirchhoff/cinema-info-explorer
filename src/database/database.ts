import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('auth.db');

export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL
    );
  `);
}
