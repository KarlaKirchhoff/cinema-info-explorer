import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieInfoLisItem from "./MovieInfoListItem";
import type { Item_Movie_Carrossel } from "../MovieCarrousselList";

interface Props {
    movies: Item_Movie_Carrossel[];
    onPressMovie?: (movie: Item_Movie_Carrossel) => void;
}

export default function MovieInfoList({ movies, onPressMovie }: Props) {

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <MovieInfoLisItem
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
        justifyContent: "center",
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});
