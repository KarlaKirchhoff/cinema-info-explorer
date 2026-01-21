import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../../context/themeContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SearchInput() {
  const { colors } = useTheme();
  const router = useRouter();

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) return;

    // 🔀 Redireciona para /results passando query
    router.push({
      pathname: '/searchResults',
      params: { query },
    });
  };

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        placeholderTextColor="#9CA3AF"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />

      <TouchableOpacity onPress={handleSearch} style={{ padding: 8 }}>
        <Ionicons
          name="search"
          size={20}
          color={colors.placeholder}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: '#67686D',
    borderRadius: 999,
  },
  containerFocused: {
    backgroundColor: '#3A3F46', // cor quando focado
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
});
