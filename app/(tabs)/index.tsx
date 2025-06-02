import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/templates/ThemedText';
import ThemedView from '@/components/templates/ThemedView';
import AppContentLayout from '@/components/layouts/AppContentLayout';

export default function HomeScreen() {
  return (
    <AppContentLayout title={'Task List'}>
      <ThemedView>
        <ThemedText>content</ThemedText>
      </ThemedView>
    </AppContentLayout>
  );
}

const styles = StyleSheet.create({
});
