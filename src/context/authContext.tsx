import { createContext, useContext, useState } from 'react';
import { User, loginUser } from '../repositories/auth.repository';

type AuthContextData = {
  user: User | null;
  signIn(email: string, password: string): boolean;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function signIn(email: string, password: string) {
    const loggedUser = loginUser(email, password);

    if (!loggedUser) return false;

    setUser(loggedUser);
    return true;
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
