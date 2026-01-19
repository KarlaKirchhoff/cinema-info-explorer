/* import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Item_Movie_Carrossel } from "../MovieCarrousselList";

interface Props {
    movie: Item_Movie_Carrossel;
    onPress?: (movie: Item_Movie_Carrossel) => void;
}

export default function MovieInfoListItem({ movie, onPress }: Props) {
    const overview =
        movie.overview && movie.overview.length >= 5
            ? movie.overview
            : "Sem descrição";


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.card}
            onPress={() => onPress?.(movie)}
        >
            <View style={styles.imageArea}>
                <Image
                    source={{ uri: movie.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.infoArea}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text style={styles.date}>{movie.release_date}</Text>
                <Text numberOfLines={4}>{overview ?? "Sem descrição"}</Text>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',   // imagem e texto lado a lado
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
        alignItems: 'flex-start',  // alinha topo da imagem e texto
    },
    imageArea: {
        width: 80,      // largura fixa para a imagem
        height: 130,     // altura fixa para a imagem
        borderRadius: 8,
        overflow: "hidden",
        marginRight: 12, // espaço entre imagem e texto
        backgroundColor: '#ccc',  // cor de fundo caso a imagem não carregue
    },
    image: {
        width: "100%",
        height: "100%",
    },
    infoArea: {
        flex: 1,             // ocupa o restante do espaço disponível
        justifyContent: 'flex-start',
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
});
 */