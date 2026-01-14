import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../src/context/authContext';
import { router } from 'expo-router';

export default function Login_Screen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const success = await signIn(email, password);

    if (success) {
      Alert.alert('Bem-vindo!', `Usuário ${email} logado com sucesso`);
      router.push("/(app)/");
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  }

  function handleRegisterNavigation() {
    router.push('/register');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={{ height: 10 }} />
      <Button title="Registrar" onPress={handleRegisterNavigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
