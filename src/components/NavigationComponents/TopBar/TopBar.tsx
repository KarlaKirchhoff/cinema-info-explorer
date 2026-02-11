// components/TopBar.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSegments } from "expo-router";
import { useTheme } from "../../../context/themeContext";
import HomeTopBar from "./HomeTopBar";
import DetailsTopBar from "./DetailsTopBar";
import SearchTopBar from "./SearchTopBar";

export default function TopBar() {
  const segments = useSegments(); // pega as partes da rota atual
  const { colors } = useTheme();

  // Nome da página atual (último segmento da rota)
  const currentSegment = segments[segments.length - 1] || "Home";
  const currentPage = currentSegment.charAt(0).toUpperCase() + currentSegment.slice(1);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {currentPage === "(app)" && <HomeTopBar />}

      {currentPage === "DetailsAboutMovie" && (
        <DetailsTopBar />
      )}

      {currentPage === "SearchResults" && (
        <SearchTopBar />
      )}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pageText: {
    fontSize: 18,
    fontWeight: "bold",
  }
});
