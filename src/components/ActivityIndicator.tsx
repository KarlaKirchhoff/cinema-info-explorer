import { ActivityIndicator } from "react-native";
import { useTheme } from "../context/themeContext";


export default function ActivityIndicator_Component(){
    return (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
    )
}