import { z } from 'zod'
import { FIELD_NAME } from './addTaskForm.constants'

export const schema = z.object({
  [FIELD_NAME.TITLE]: z
    .string()
    .min(5, { message: 'Title must be at least 5 characters long' }),
  [FIELD_NAME.DESCRIPTION]: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
  [FIELD_NAME.LOCATION]: z
    .string()
    .min(4, { message: 'Location must be at least 4 characters long' }),
})
