// app/(app)_layout.tsx
import { Slot } from 'expo-router';
import TopBar from '../../src/components/NavigationComponents/TopBar/TopBar';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../src/context/themeContext';

export default function AppLayout() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TopBar />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
