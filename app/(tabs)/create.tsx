import AddTaskForm from '@/components/AddTaskForm'
import AppContentLayout from '@/components/layouts/AppContentLayout'
import { Colors } from '@/constants/Colors'
import { PAGE_TITLE } from '@/constants/general'
import React, { FC } from 'react'

const CreateTask: FC = () => (
  <AppContentLayout
    title={PAGE_TITLE.ADD_FIELD}
    lightColor={Colors.light.background}
    darkColor={Colors.dark.background}
  >
    <AddTaskForm lightColor={'black'} darkColor={'grey'} />
  </AppContentLayout>
)

export default CreateTask
