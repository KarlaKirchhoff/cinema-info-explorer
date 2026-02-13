import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { getPopularMovies } from '../../src/api/moviesAPI';
import { Movie } from '../../src/types/responseApi/Movie';

//Componentes Internos
import MovieCarroussel, { CarrousselStyles } from '../../src/components/List/MovieCarrousselList';
import { useTheme } from '../../src/context/themeContext';
import SearchInput from '../../src/components/SearchInput/SearchInput';
import ActivityIndicator from '../../src/components/ActivityIndicator';
import NavMovieGridList from '../../src/components/NavMovieGridList';

const Conteudo = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  if (loading) return <ActivityIndicator />;

  const limitedMovies = movies.slice(0, 10).map((item) => ({
    ...item,
    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
  }));

  const carrousselStyles: CarrousselStyles = { top: 0, bottom: 0 }

  return (
    <>
      <SearchInput />
      <MovieCarroussel movies={limitedMovies} styles_carroussel={carrousselStyles} />
      <NavMovieGridList />
    </>
  );
};

export default function HomeScreen() {
    const { colors } = useTheme();
  // Estilos dinâmicos baseados no tema
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background, // tema atual
      paddingHorizontal: 20,
    }
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        keyExtractor={() => "static"}
        renderItem={null}
        ListHeaderComponent={Conteudo}
      />
    </View>
  )
}