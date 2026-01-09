import { View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { router } from 'expo-router';

export default function Login_Screen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const success = await signIn(email, password);

    if (!success) {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  }

  function handleRegisterNavigation() {
    router.push('/register');
    // ou: router.push('/(auth)/register');
  }

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Registrar" onPress={handleRegisterNavigation} />
    </View>
  );
}
