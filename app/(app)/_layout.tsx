// app/(app)_layout.tsx
import { Slot } from 'expo-router';
import TopBar from '../../src/components/NavigationComponents/TopBar/TopBar';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../src/context/themeContext';
import { StatusBar } from 'expo-status-bar';

export default function AppLayout() {
  const { theme, colors } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <TopBar />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26
  },
});
