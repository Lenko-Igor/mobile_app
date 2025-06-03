import { StatusEnum } from './enums'

export type TaskContextValueType = {
  tasks: TaskType[]
  addTask: (p: TaskType[]) => void
  removeTask: (id: string) => void
  updateTaskStatus: (id: string, status: StatusEnum) => void
}

export type TaskType = {
  id: string
  title: string
  description: string
  date: string
  location: string
  status: StatusEnum
  createDate: Date
}
