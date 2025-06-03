import { StatusEnum } from './enums'

export type TaskContextValueType = {
  tasks: TaskType[]
  addTask: (p: TaskType[]) => void
  removeTask: (id: string) => void
  updateTaskStatus: (id: string, status: StatusEnum) => void
  getTasksData: (order?: OrderType) => void
}

export type TaskType = {
  id: string
  title: string
  description: string
  location: string
  status: StatusEnum
  createDate: Date
}

export type OrderType = 'asc' | 'desc'
