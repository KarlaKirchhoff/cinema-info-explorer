import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';
import { fetchPopularMovies } from '../../src/api/moviesAPI';
import { Movie } from '../../src/types/responseApi/Movie';

//Componentes Internos
import MovieList_Component from '../../src/components/List/MovieCarrousselList';
import MovieGridList from '../../src/components/List/MovieGridList';
import { useTheme } from '../../src/context/themeContext';

const HomeScreen = () => {
  const { colors, theme, toggleTheme } = useTheme();

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

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1, backgroundColor: colors.background }} />;

  const limitedMovies = movies.slice(0, 10).map((item) => ({
    ...item,
    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
  }));

  // Estilos dinâmicos baseados no tema
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background, // tema atual
      padding: 10,
    },
    button: {
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Trocar Tema" onPress={toggleTheme} color={colors.active} />
      </View>

      <MovieList_Component movies={limitedMovies} />
      <MovieGridList movies={limitedMovies} />
    </View>
  );
};

export default HomeScreen;
