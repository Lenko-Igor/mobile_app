import AppContentLayout from '@/components/layouts/AppContentLayout'
import TasksList from '@/components/TasksList'
import { PAGE_TITLE } from '@/constants/general'
import { FC } from 'react'

const HomeScreen: FC = () => (
  <AppContentLayout title={PAGE_TITLE.TASK_LIST}>
    <TasksList />
  </AppContentLayout>
)

export default HomeScreen
