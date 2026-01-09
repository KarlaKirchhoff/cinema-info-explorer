import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('auth.db');

export function initDatabase(): void {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
      );
    `);
    console.log('Tabela users criada com sucesso');
  } catch (error) {
    console.error('Erro ao criar tabela users:', error);
  }
}

export const getDB = () => db;