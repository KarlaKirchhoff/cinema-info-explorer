// components/TopBar.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { useTheme } from "../../context/themeContext";

export default function TopBar() {
  const router = useRouter();
  const segments = useSegments(); // pega as partes da rota atual
  const { theme, toggleTheme, colors } = useTheme();

  // Nome da página atual (último segmento da rota)
  const currentPage = segments[segments.length - 1] || "Home";

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Botão Voltar */}
      <TouchableOpacity
        style={[styles.button,]}
        onPress={() => router.back()}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Voltar</Text>
      </TouchableOpacity>

      {/* Página atual */}
      <Text style={[styles.pageText, { color: colors.primary }]}>
        {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
      </Text>

      {/* Botão Trocar Tema */}
      <TouchableOpacity
        style={[styles.button,]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>
          {theme === "light" ? "Dark" : "Light"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
