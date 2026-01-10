import { FlatList } from "react-native";
import MovieCard from "../cards/MovieCard";
import type { MovieCard_Interface } from "../cards/MovieCard";

// Interface do item, adicionando id
interface Item extends MovieCard_Interface {
  id: number;
}

// Interface das props do componente
interface MovieListProps {
  movies: Item[];
}

export default function MovieList_Component({ movies }: MovieListProps) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <MovieCard
          key={item.id}
          image={`https://image.tmdb.org/t/p/w500${item.image}`}
          title={item.title}
        />
      )}
    />
  );
}
