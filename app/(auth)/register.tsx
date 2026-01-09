import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../src/context/authContext';
import { router } from 'expo-router';

export default function Register_Screen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();

  async function handleRegister() {
     
    const success = await signUp(email, password); 

    if (success) {
      Alert.alert('Sucesso', 'Usuário criado');
      router.back(); // volta para a tela de login
    } else {
      Alert.alert('Erro', 'Usuário já existe ou ocorreu um erro');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
