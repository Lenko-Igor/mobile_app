import { createContext, Dispatch, SetStateAction } from 'react'

export const TasksContext = createContext<
  [[], React.Dispatch<React.SetStateAction<[]>>] | undefined
>(undefined)
