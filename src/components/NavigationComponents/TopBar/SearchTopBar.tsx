import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../context/themeContext";

import styles from "./styles_topbar";

export default function SearchTopBar() {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Botão Voltar */}
            <TouchableOpacity
                onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={colors.primary} />
            </TouchableOpacity>

            <Text style={[styles.pageText, { color: colors.primary }]}>
                Search
            </Text>

            <Ionicons name="information-circle-outline" size={24} color={colors.primary} />
        </View>
    )
}
