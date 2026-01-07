import { db } from '../database/database';

export type User = {
  id: number;
  email: string;
};

export function createUser(email: string, password: string) {
  db.runSync(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, password]
  );
}

export function loginUser(email: string, password: string): User | null {
  const result = db.getFirstSync<User>(
    'SELECT id, email FROM users WHERE email = ? AND password = ?',
    [email, password]
  );

  return result ?? null;
}
