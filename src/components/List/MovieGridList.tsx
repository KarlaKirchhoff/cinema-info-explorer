import { FlatList, StyleSheet, View } from "react-native";
import MovieGridCard from "../cards/MovieGridCard";
import { Item_Movie_Carrossel } from "./MovieCarrousselList";

interface Props {
  movies: Item_Movie_Carrossel[];
  onPressMovie?: (movie: Item_Movie_Carrossel) => void;
}

export default function MovieGridList({ movies, onPressMovie }: Props) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MovieGridCard
          movie={item}
          onPress={onPressMovie}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: "space-between",
  },
});
