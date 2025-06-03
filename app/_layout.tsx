import { FC, useEffect, useState } from 'react'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { LOCAL_STORAGE_KEY } from '@/constants/general'
import { TasksContext } from '@/contexts/tasksContext'

const RootLayout: FC = () => {
  const colorScheme = useColorScheme()
  const { getItem } = useAsyncStorage(LOCAL_STORAGE_KEY)
  const [tasksData, setTasksData] = useState<[]>([])

  const readItemFromStorage = async () => {
    const itemFromStorage = await getItem()
    const result = itemFromStorage != null ? JSON.parse(itemFromStorage) : []
    setTasksData(result)
  }

  useEffect(() => {
    readItemFromStorage()
  }, [])

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TasksContext.Provider value={[tasksData, setTasksData]}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </TasksContext.Provider>
    </ThemeProvider>
  )
}

export default RootLayout
