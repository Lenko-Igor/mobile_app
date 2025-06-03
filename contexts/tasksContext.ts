import { TaskContextValueType } from '@/types/types'
import { createContext } from 'react'

const initValue: TaskContextValueType = {
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  updateTaskStatus: () => {},
}

export const TasksContext = createContext<TaskContextValueType>(initValue)
