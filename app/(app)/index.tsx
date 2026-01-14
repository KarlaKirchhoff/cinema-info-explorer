import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { fetchPopularMovies } from '../../src/api/moviesAPI';
import { Movie } from '../../src/types/responseApi/Movie';

//Componentes Internos
import MovieList_Component from '../../src/components/List/MovieCarrousselList';
import MovieGridList from '../../src/components/List/MovieGridList';

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

  // Aqui você pode desestruturar o array ou limitar os itens antes de passar
  const limitedMovies = movies.slice(0, 10).map((item) => ({
    ...item,
    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
  }));

  return (
    <>
      <MovieList_Component movies={limitedMovies} />
      <MovieGridList movies={limitedMovies} />
    </>
  );
};

const styles = StyleSheet.create({
  movieCard: { marginBottom: 20 },
  poster: { width: '100%', height: 300, borderRadius: 8 },
  title: { marginTop: 8, fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
