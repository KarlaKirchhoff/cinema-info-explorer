// app/results.tsx
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { searchMovie } from '../../src/api/moviesAPI';
import { Movie } from '../../src/types/responseApi/Movie';
import SearchInput from '../../src/components/SearchInput/SearchInput';
import MovieInfoList from '../../src/components/List/MovieInfoList/MovieInfoList';

export default function SearchResults() {
    const { query } = useLocalSearchParams<{ query: string }>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        searchMovie(query)
            .then(setMovies)
            .finally(() => setLoading(false));
    }, [query]);


    const formatedMovies = movies.map((item) => ({
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    }))

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <SearchInput />
            {loading && <Text>Carregando...</Text>}
            <MovieInfoList movies={formatedMovies} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    loadingText: {
        textAlign: 'center',
        marginBottom: 12,
        fontSize: 16,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
    card: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },
    date: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    flatListEmpty: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});