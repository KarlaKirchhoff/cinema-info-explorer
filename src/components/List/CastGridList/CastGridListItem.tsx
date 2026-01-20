import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export type CastItem = {
    id: number;
    name: string;
    photo: string;
};

type Props = {
    cast: CastItem;
};

const { width } = Dimensions.get("window");
const ITEM_SIZE = width / 2 - 40;

export default function CastGridListItem({ cast }: Props) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${cast.photo}` }}
                style={styles.avatar}
            />
            <Text style={styles.name} numberOfLines={2}>
                {cast.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: ITEM_SIZE,
        alignItems: "center",
        marginBottom: 24,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#2A2F38",
    },
    name: {
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "500",
    },
});
