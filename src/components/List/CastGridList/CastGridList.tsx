import { FlatList, StyleSheet } from "react-native";
import CastGridListItem from "./CastGridListItem";
import type { CastItem } from "./CastGridListItem";
import ActivityIndicator from "../../ActivityIndicator";
import { useEffect, useState } from "react";
import { MovieCast } from "../../../types/responseApi/Movie";
import { getMovieCredits } from "../../../api/charactersAPI";

type Props = {
    movie_id: number
}

export default function CastGridList({ movie_id }: Props) {
    const [casts, setCasts] = useState<MovieCast[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getMovieCredits(movie_id);
            setCasts(data);
            setLoading(false);
        };
        loadMovies();
    }, []);

    if (loading) return <ActivityIndicator />;

    const formatedCasts: CastItem[] = casts.map((cast) => {
        return {
            id: cast.id,
            name: cast.name,
            photo: cast.profile_path,
        }
    })

    return (
        <FlatList
            data={formatedCasts}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
                <CastGridListItem cast={item} />
            )}
        />
    );
}


const styles = StyleSheet.create({
    list: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-around",
    }
});
