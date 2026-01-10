import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchPopularMovies } from '../../src/api/moviesAPI';
import { Movie } from '../../src/types/responseApi/Movie';

const HomeScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.movieCard}>
          <Image
            style={styles.poster}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  movieCard: { marginBottom: 20 },
  poster: { width: '100%', height: 300, borderRadius: 8 },
  title: { marginTop: 8, fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
