// app/(app)/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../src/context/authContext';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Usuário!</Text>

      <Text style={styles.subtitle}>Esta é a tela principal do app.</Text>

      <Button
        title="Sair"
        onPress={() => {
          signOut();            // limpa sessão
          router.replace('/(auth)/login'); // redireciona para login
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },
});
