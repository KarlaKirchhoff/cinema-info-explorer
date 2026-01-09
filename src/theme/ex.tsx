import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createTheme } from '.';

export default function App() {
  const theme = createTheme('light'); // troque para 'dark' para tema escuro

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.text, fontSize: theme.typography.title.fontSize }}>
        Olá, Mundo!
      </Text>
      <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
        <Text style={{ color: theme.colors.text }}>Este é um card</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  card: { padding: 16, borderWidth: 1, borderRadius: 8, marginTop: 16, width: '100%' },
});
