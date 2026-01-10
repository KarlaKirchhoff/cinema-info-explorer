import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export interface MovieCard_Interface {
    image: string;
    title: string
}

/* https://image.tmdb.org/t/p/w500 */


export default function MovieCard_Component({ image, title }: MovieCard_Interface) {
    return (
        <View style={styles.movieCard}>
            <Image
                style={styles.poster}
                source={{ uri: image }}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movieCard: { marginBottom: 20 },
    poster: { width: '100%', height: 300, borderRadius: 8 },
    title: { marginTop: 8, fontSize: 16, fontWeight: 'bold' },
});