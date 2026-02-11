import { FlatList, StyleSheet, Text, View } from "react-native";
import { MovieInfoListItem } from "./MovieInfoListItem";
import type { Item_Movie_Carrossel } from "../MovieCarrousselList";
import OpenDetailsAboutMovieScreen from "../../../utils/Functions/OpenDetailsAboutMovieScreen";

interface Props {
    movies: Item_Movie_Carrossel[];
}

export default function MovieInfoList({ movies }: Props) {

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <MovieInfoListItem
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
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});
