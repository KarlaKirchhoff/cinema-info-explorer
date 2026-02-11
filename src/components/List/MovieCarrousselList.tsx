import { FlatList, StyleSheet } from "react-native";
import MovieCard from "../cards/MovieCarrousselCard";
import { Movie } from "../../types/responseApi/Movie";
import OpenDetailsAboutMovieScreen from "../../utils/Functions/OpenDetailsAboutMovieScreen";

// Interface do item, adicionando id
export interface Item_Movie_Carrossel extends Movie {
  image: string
}

export type CarrousselStyles = {
  top?: number,
  bottom?: number,
  left?: number,
  right?: number,
  horizontal?: number,
  vertical?: number,
}

// Interface das props do componente
interface MovieListProps {
  movies: Item_Movie_Carrossel[];
  styles_carroussel?: CarrousselStyles,
}

export default function MovieCarroussel_Component({ movies, styles_carroussel }: MovieListProps) {

  let top: number = styles_carroussel?.top ?? 0
  let bottom: number = styles_carroussel?.bottom ?? 0
  let left: number = styles_carroussel?.left ?? 16
  let right: number = styles_carroussel?.right ?? 16

  if (styles_carroussel?.horizontal) {
    left = styles_carroussel.horizontal;
    right = styles_carroussel.horizontal;
  }

  if (styles_carroussel?.vertical) {
    top = styles_carroussel.vertical;
    bottom = styles_carroussel.vertical;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: bottom,
        paddingTop: top,
        paddingLeft: left,
        paddingRight: right
      }}
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