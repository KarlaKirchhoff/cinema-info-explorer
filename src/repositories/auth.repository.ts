import { db } from '../database/database';
import { hashPassword } from '../utils/crypto';

export type User = {
  id: number;
  email: string;
};

export async function createUser(email: string, password: string) {
  const passwordHash = await hashPassword(password);

  db.runSync(
    'INSERT INTO users (email, password_hash) VALUES (?, ?)',
    [email, passwordHash]
  );
}

export async function loginUser(
  email: string,
  password: string
): Promise<User | null> {
  const passwordHash = await hashPassword(password);

  const user = db.getFirstSync<User>(
    'SELECT id, email FROM users WHERE email = ? AND password_hash = ?',
    [email, passwordHash]
  );

  return user ?? null;
}
