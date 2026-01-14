import { FlatList, StyleSheet } from "react-native";
import MovieCard from "../cards/MovieCarrousselCard";
import { Movie } from "../../types/responseApi/Movie";

// Interface do item, adicionando id
export interface Item_Movie_Carrossel extends Movie {
  image: string
}

// Interface das props do componente
interface MovieListProps {
  movies: Item_Movie_Carrossel[];
}

export default function MovieList_Component({ movies }: MovieListProps) {
  //console.log(movies);
  
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
          onPressItem={(movies) => console.log(movies.title)}
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