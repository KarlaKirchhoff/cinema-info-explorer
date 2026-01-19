import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Item_Movie_Carrossel } from "../MovieCarrousselList";
import { getMovieDetails } from "../../../api/moviesAPI";
import { MovieDetais } from "../../../types/responseApi/Movie";

interface Props {
    movie: Item_Movie_Carrossel;
    onPress?: (movie: Item_Movie_Carrossel) => void;
}

export function MovieInfoListItem({ movie, onPress }: Props) {

    const [info, setInfo] = useState<MovieDetais | null>(null);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getMovieDetails(Number(movie.id));
            setInfo(data);
        };
        loadMovies();
    }, []);

    const year: string = movie.release_date.split("-")[0];
    const duration: string = info?.runtime.toString() ?? '--'

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.container}
            onPress={() => onPress?.(movie)}>
            <Image source={{ uri: movie.image }} style={styles.poster} />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>
                    {movie.title}
                </Text>

                <View style={styles.row}>
                    <FontAwesome name="star" size={14} color="#F5C518" />
                    <Text style={styles.rating}>{movie.vote_average}</Text>
                </View>

                <View style={styles.row}>
                    <Feather name="film" size={14} color="#B0B0B0" />
                    <Text style={styles.text}>{info?.genres[0].name}</Text>
                </View>

                <View style={styles.row}>
                    <Feather name="calendar" size={14} color="#B0B0B0" />
                    <Text style={styles.text}>{year}</Text>
                </View>

                <View style={styles.row}>
                    <Feather name="clock" size={14} color="#B0B0B0" />
                    <Text style={styles.text}>{duration} minutes</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    },
    poster: {
        width: 90,
        height: 130,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "space-between",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    rating: {
        color: "#F5C518",
        fontWeight: "600",
        marginLeft: 4,
    },
    text: {
        color: "#B0B0B0",
        fontSize: 14,
        marginLeft: 4,
    },
});
