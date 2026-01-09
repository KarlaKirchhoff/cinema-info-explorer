// app/(app)/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../src/context/authContext';
import { router } from 'expo-router';

import { Text_Component } from '../../src/components/Text';

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={{ padding: 24 }}>
        <Text_Component variant="heading1">Heading 1</Text_Component>
        <Text_Component variant="heading2">Heading 2</Text_Component>
        <Text_Component variant="heading3">Heading 3</Text_Component>

        <Text_Component variant="bodyLarge">
          Texto body large para destaque.
        </Text_Component>

        <Text_Component>
          Texto body padrão do aplicativo.
        </Text_Component>

        <Text_Component variant="bodySmall">
          Texto menor.
        </Text_Component>

        <Text_Component variant="caption">
          Texto de legenda.
        </Text_Component>
      </View>

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
