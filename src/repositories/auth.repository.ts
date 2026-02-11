// src/repositories/auth.repository.ts
import { db } from '../database/database';
import { hashPassword } from '../utils/crypto';

export type User = {
  id: number;
  email: string;
};

// Criar usuário
export async function createUser(email: string, password: string): Promise<User> {
  const passwordHash = await hashPassword(password);
  try {
    db.runSync(
      'INSERT INTO users (email, password_hash) VALUES (?, ?)',
      [email, passwordHash]
    );

        // Obter o usuário pelo email
    const user = db.getFirstSync<User>(
      'SELECT id, email FROM users WHERE email = ?',
      [email]
    );

    if (!user) throw new Error('Erro ao buscar usuário criado');

    return user;
  } catch (error) {
    console.error('[SQLite] Erro ao criar usuário:', error);
    throw new Error('Usuário já existe ou erro no banco');
  }
}

// Login
export async function loginUser(email: string, password: string): Promise<User | null> {
  const passwordHash = await hashPassword(password);

  const user = db.getFirstSync<User>(
    'SELECT id, email FROM users WHERE email = ? AND password_hash = ?',
    [email, passwordHash]
  );

  return user ?? null;
}
