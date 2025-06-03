import AddTaskForm from '@/components/AddTaskForm'
import AppContentLayout from '@/components/layouts/AppContentLayout'
import { PAGE_TITLE } from '@/constants/general'
import React, { FC } from 'react'

const CreateTask: FC = () => (
  <AppContentLayout title={PAGE_TITLE.ADD_FIELD}>
    <AddTaskForm />
  </AppContentLayout>
)

export default CreateTask
