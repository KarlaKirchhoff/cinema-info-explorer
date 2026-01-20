import { FlatList, StyleSheet } from "react-native";
import MovieCard from "../cards/MovieCarrousselCard";
import { Movie } from "../../types/responseApi/Movie";
import OpenDetailsAboutMovieScreen from "../../utils/Functions/OpenDetailsAboutMovieScreen";

// Interface do item, adicionando id
export interface Item_Movie_Carrossel extends Movie {
  image: string
}

// Interface das props do componente
interface MovieListProps {
  movies: Item_Movie_Carrossel[];
}

export default function MovieCarroussel_Component({ movies }: MovieListProps) {

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <MovieCard
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
  },
});