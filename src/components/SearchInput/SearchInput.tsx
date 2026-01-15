import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../../context/themeContext';
import { useRouter } from 'expo-router';

export default function SearchInput() {
  const { searchInput } = useTheme();
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

  return (
    <View style={{ flexDirection: 'row', marginBottom: 16 }}>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 12,
        }}
        placeholder="Digite o nome do filme"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />

      <TouchableOpacity onPress={handleSearch} style={{ padding: 8 }}>
        <Image
          source={searchInput}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
