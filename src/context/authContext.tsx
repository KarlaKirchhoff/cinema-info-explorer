import { createContext, useContext, useState } from 'react';
import { User, loginUser, createUser } from '../repositories/auth.repository';

type AuthContextData = {
  user: User | null;
  signIn(email: string, password: string): Promise<boolean>;
  signOut(): void;
  signUp(email: string, password: string): Promise<boolean>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string): Promise<boolean> {
    const loggedUser = await loginUser(email, password);
    if (!loggedUser) return false;

    setUser(loggedUser);
    return true;
  }

  async function signUp(email: string, password: string): Promise<boolean> {
    try {
      await createUser(email, password);
      return true;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return false;
    }
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}