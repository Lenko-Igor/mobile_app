import { OrderType, TaskType } from '@/types/types'
import dayjs from 'dayjs'

export const sortTasksByCreateDate = (order: OrderType) => {
  return (a: TaskType, b: TaskType) => {
    if (order === 'asc') {
      return (
        dayjs(a.createDate).millisecond() - dayjs(b.createDate).millisecond()
      )
    } else if (order === 'desc') {
      return (
        dayjs(b.createDate).millisecond() - dayjs(a.createDate).millisecond()
      )
    } else {
      return 0
    }
  }
}
