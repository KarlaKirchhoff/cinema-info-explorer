import { FlatList, StyleSheet, View } from "react-native";
import MovieGridCard from "../cards/MovieGridCard";
import { Item_Movie_Carrossel } from "./MovieCarrousselList";
import OpenDetailsAboutMovieScreen from "../../utils/Functions/OpenDetailsAboutMovieScreen";

interface Props {
  movies: Item_Movie_Carrossel[];
}

export default function MovieGridList({ movies }: Props) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MovieGridCard
          movie={item}
          onPressItem={(movies) => OpenDetailsAboutMovieScreen({
            id: movies.id,
            title: movies.title,
            image: movies.image,
            backdrop_path: movies.backdrop_path,
            vote_average: movies.vote_average,
            release_date: movies.release_date,
            duration: 148,
            genre_ids: movies.genre_ids,
            overview: movies.overview,
          })}
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
    justifyContent: "center",
  },
});
