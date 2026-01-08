import { View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { createUser } from '../repositories/auth.repository';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    try {
      createUser(email, password);
      Alert.alert('Sucesso', 'Usuário criado');
    } catch {
      Alert.alert('Erro', 'Usuário já existe');
    }
  }

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}
