import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { FC, useEffect, useState } from 'react'
import 'react-native-reanimated'

import { TasksContext } from '@/contexts/tasksContext'
import { useColorScheme } from '@/hooks/useColorScheme'
import localStorageStore from '@/store/localStorage.store'
import { StatusEnum } from '@/types/enums'
import { TaskType } from '@/types/types'

const RootLayout: FC = () => {
  const colorScheme = useColorScheme()
  const [data, setData] = useState<TaskType[]>([])
  const {
    getTasksDataFromStorage,
    writeTasksDataToStorage,
    removeTaskDataById,
    changeTaskStatusById,
  } = localStorageStore
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const setDataFromStorage = async () => {
    const result = await getTasksDataFromStorage()
    setData(result)
  }

  const addTask = async (data: TaskType[]) => {
    await writeTasksDataToStorage(data)
    setDataFromStorage()
  }

  const removeTask = async (id: string) => {
    await removeTaskDataById(id)
    setDataFromStorage()
  }

  const updateTaskStatus = async (id: string, status: StatusEnum) => {
    await changeTaskStatusById(id, status)
    setDataFromStorage()
  }

  useEffect(() => {
    setDataFromStorage()
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TasksContext.Provider
        value={{ tasks: data, addTask, removeTask, updateTaskStatus }}
      >
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
