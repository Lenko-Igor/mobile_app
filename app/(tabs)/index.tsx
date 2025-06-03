import AppContentLayout from '@/components/layouts/AppContentLayout'
import TasksList from '@/components/TasksList'
import { Colors } from '@/constants/Colors'
import { PAGE_TITLE } from '@/constants/general'
import { FC } from 'react'

const HomeScreen: FC = () => (
  <AppContentLayout
    title={PAGE_TITLE.TASK_LIST}
    lightColor={Colors.light.background}
    darkColor={Colors.dark.background}
  >
    <TasksList />
  </AppContentLayout>
)

export default HomeScreen
