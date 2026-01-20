import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";


export default function ThemeIcon() {
  const { theme, colors } = useTheme();

  // Escolhe o ícone dependendo do tema
  const iconName = theme === "light" ? "moon-outline" : "sunny-outline";

  return <Ionicons name={iconName} size={24} color={colors.primary} />;
}