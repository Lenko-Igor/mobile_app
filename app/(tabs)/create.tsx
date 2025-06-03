import AppContentLayout from '@/components/layouts/AppContentLayout'
import React, { FC } from 'react'
import AddTaskForm from '@/components/AddTaskForm'

const CreateTask: FC = () => {
  return (
    <AppContentLayout title={'Add a New Field Task'}>
      <AddTaskForm />
    </AppContentLayout>
  )
}

export default CreateTask
