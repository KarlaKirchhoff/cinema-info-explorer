import { Button, ScrollView } from 'react-native';
import MovieCarousel, { Movie } from '../../../src/components/carrossel/carrossel';
import { router } from 'expo-router';


const movies: Movie[] = [
  {
    id: '1',
    title: 'Jurassic World',
    poster: 'https://image.tmdb.org/t/p/w500/6E6N2q5Jj2bHjzJvJzpuG1Hsfrn.jpg',
  },
  {
    id: '2',
    title: 'Spider-Man',
    poster: 'https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
  },
  {
    id: '3',
    title: 'Avengers',
    poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
  },
];

export default function Home() {
  function handleRegisterNavigation() {
    router.push('/carrosselpage');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Button title="Registrar" onPress={handleRegisterNavigation} />
      <MovieCarousel
        title="Now playing"
        data={movies}
        onPressItem={(movie: Movie) => console.log(movie.title)}
      />

      <MovieCarousel
        title="Upcoming"
        data={movies}
      />
    </ScrollView>
  );
}
