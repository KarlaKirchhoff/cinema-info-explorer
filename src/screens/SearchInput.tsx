import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { searchMovie } from '../../api/moviesAPI';

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
};

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const results = await searchMovie(query);
      setMovies(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisar Filmes</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do filme"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#000" />}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.date}>{item.release_date}</Text>
            <Text numberOfLines={3}>{item.overview}</Text>
          </View>
        )}
        ListEmptyComponent={
          !loading ? <Text style={styles.empty}>Nenhum filme encontrado</Text> : null
        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
