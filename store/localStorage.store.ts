import { sortTasksByCreateDate } from '@/helpers/helpers'
import { LOCAL_STORAGE_KEY } from '@/constants/general'
import { StatusEnum } from '@/types/enums'
import { OrderType, TaskType } from '@/types/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

class LocalStorageStore {
  getTasksDataFromStorage = async (order?: OrderType): Promise<TaskType[]> => {
    try {
      const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY)
      const data: TaskType[] = response != null ? JSON.parse(response) : []

      return data.sort(sortTasksByCreateDate(order ?? 'asc'))
    } catch (error) {
      console.log('getTasksDataFromStorage', error)
      return []
    }
  }

  writeTasksDataToStorage = async (data: TaskType[]) => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(LOCAL_STORAGE_KEY, jsonValue)
    } catch (error) {
      console.log('writeTasksDataToStorage', error)
    }
  }

  removeTaskDataById = async (id: string) => {
    try {
      const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY)
      const data: TaskType[] = response != null ? JSON.parse(response) : []

      const filteredData = data.filter((item) => item.id !== id) ?? []
      this.writeTasksDataToStorage(filteredData)
    } catch (error) {
      console.log('removeTaskDataById', error)
    }
  }

  changeTaskStatusById = async (id: string, status: StatusEnum) => {
    try {
      const response = await AsyncStorage.getItem(LOCAL_STORAGE_KEY)
      const data: TaskType[] = response != null ? JSON.parse(response) : []

      const updatedData =
        data.map((item) => (item.id === id ? { ...item, status } : item)) ?? []
      this.writeTasksDataToStorage(updatedData)
    } catch (error) {
      console.log('changeTaskStatusById', error)
    }
  }
}

const localStorageStore = new LocalStorageStore()

export default localStorageStore
