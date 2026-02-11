import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";

export default function SavedIconMovie() {
    const { colors } = useTheme()
    const [saved, setSaved] = useState(false);

    return (
        <TouchableOpacity onPress={() => setSaved(!saved)}>
            <Ionicons
                name={saved ? "bookmark" : "bookmark-outline"}
                size={24}
                color={colors.primary}
            />
        </TouchableOpacity>
    );
}