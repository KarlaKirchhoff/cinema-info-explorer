import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../context/themeContext";
import ThemeIcon from "../../ActionIcons/ThemeIcon";

import styles from "./styles_topbar";

export default function HomeTopBar() {
    const { theme, toggleTheme, colors } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.pageText, { color: colors.primary }]}>O que você quer assistir?</Text>
            {/* Botão Trocar Tema */}
            <TouchableOpacity
                style={styles.button}
                onPress={toggleTheme}
            >
                <ThemeIcon />
            </TouchableOpacity>
        </View>
    )
}

