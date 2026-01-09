import { Redirect } from 'expo-router';
import { useAuth } from '../src/context/authContext';
export default function Index() {
  const { user/* , loading */ } = useAuth();

/*   if (loading) {
    return null; // ou splash / loading
  } */

  if (user) {
    return <Redirect href="/(app)" />;
  }

  return <Redirect href="/(auth)/login" />;
}