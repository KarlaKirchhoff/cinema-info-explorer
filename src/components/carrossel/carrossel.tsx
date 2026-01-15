import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text_Component as Text } from '../Text';

const { width } = Dimensions.get('window');

interface Movie {
  id: string;
  title: string;
  poster: string;
}

interface Props {
  title: string;
  data: Movie[];
  onPressItem?: (movie: Movie) => void;
}

export default function MovieCarousel({ title, data, onPressItem }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="heading3" style={styles.title}>
        {title}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPressItem?.(item)}
            style={styles.card}
          >
            <Image
              source={{ uri: item.poster }}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const CARD_WIDTH = width * 0.32;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
  },
});
