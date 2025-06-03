import { FlatList, StyleSheet } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { ThemedText } from '@/components/templates/ThemedText'
import ThemedView from '@/components/templates/ThemedView'
import AppContentLayout from '@/components/layouts/AppContentLayout'
import { useContext, useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEY } from '@/constants/general'
import { TasksContext } from '@/contexts/tasksContext'

export default function HomeScreen() {
  const context = useContext(TasksContext)
  // const [tasksData, setTasksData] = useState<[]>([]);

  // const readItemFromStorage = async () => {
  //   const itemFromStorage = await getItem()
  //   const result = itemFromStorage != null
  //       ? JSON.parse(itemFromStorage)
  //       : []
  //   setTasksData(result);
  // };

  // useEffect(() => {
  //   readItemFromStorage()
  // }, []);

  console.log({ context })

  return (
    <AppContentLayout title={'Task List'}>
      <ThemedView>
        <ThemedText>content</ThemedText>
        <FlatList
          data={context?.[0]}
          renderItem={({ item }) => (
            <ThemedView style={styles.item}>
              <ThemedText type="subtitle">{item.title}</ThemedText>
              <ThemedText type="subtitle">{item.description}</ThemedText>
            </ThemedView>
          )}
          keyExtractor={(item: any) => item.title}
        />
      </ThemedView>
    </AppContentLayout>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
