import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Item_Movie_Carrossel } from "../List/MovieCarrousselList";

interface Props {
  movie: Item_Movie_Carrossel;
  onPressItem?: (movie: Item_Movie_Carrossel) => void;
}

const { width } = Dimensions.get("window");

// largura do card considerando padding e gap
const CARD_WIDTH = (width - 80) / 3;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

export default function MovieGridCard({ movie, onPressItem }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => onPressItem?.(movie)}
    >
      <Image
        source={{ uri: movie.image }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    marginRight: 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
