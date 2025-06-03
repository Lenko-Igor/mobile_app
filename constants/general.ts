import { StatusEnum } from '@/types/enums'

export const LOCAL_STORAGE_KEY = 'tasks'

export const PAGE_TITLE = {
  TASK_LIST: 'Task List',
  ADD_FIELD: 'Add a New Field Task',
}

export const STATUS_NAME: { [key in StatusEnum]: string } = {
  [StatusEnum.InProgress]: 'In Progress',
  [StatusEnum.Completed]: 'Completed',
  [StatusEnum.Cancelled]: 'Cancelled',
}
