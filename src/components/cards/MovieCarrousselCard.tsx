import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Item_Movie_Carrossel } from "../List/MovieCarrousselList";

export interface MovieCard_Interface {
    movie: Item_Movie_Carrossel;
    onPressItem?: (movie: Item_Movie_Carrossel) => void;
}

const { width } = Dimensions.get('window');


export default function MovieCard_Component({movie, onPressItem }: MovieCard_Interface) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPressItem?.(movie)}
            style={styles.movieCard}>
            <Image
                style={styles.poster}
                source={{ uri: movie.image }}
                resizeMode="cover"
            />
        </TouchableOpacity>
    )
}

const CARD_WIDTH = width * 0.40;
const CARD_HEIGHT = CARD_WIDTH * 1.5 ;

const styles = StyleSheet.create({
    movieCard: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginBottom: 30,
        marginRight: 20,
        borderRadius: 12,
        overflow: 'hidden',
    },
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    }
});