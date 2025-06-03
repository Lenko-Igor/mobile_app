import { TasksContext } from '@/contexts/tasksContext'
import { useThemeColor } from '@/hooks/useThemeColor'
import { StatusEnum } from '@/types/enums'
import { TaskType } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button, StyleSheet, Text, View, ViewProps } from 'react-native'
import InputForm from '../InputForm'
import ThemedView from '../templates/ThemedView'
import { formConfig } from './addTaskForm.config'
import { FIELD_NAME } from './addTaskForm.constants'
import { schema } from './addTaskForm.schema'

export type AddTaskFormType = ViewProps & {
  lightColor?: string
  darkColor?: string
}

type FormValuesType = Omit<TaskType, 'id' | 'status' | 'createDate'>

const AddTaskForm: FC<AddTaskFormType> = ({ lightColor, darkColor }) => {
  const { tasks, addTask } = useContext(TasksContext)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      [FIELD_NAME.TITLE]: '',
      [FIELD_NAME.DESCRIPTION]: '',
      [FIELD_NAME.LOCATION]: '',
    },
  })
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  )

  const onSubmit: SubmitHandler<FormValuesType> = async (
    data: FormValuesType
  ) => {
    addTask([
      ...tasks,
      {
        id: `${Date.now()}`,
        status: StatusEnum.InProgress,
        createDate: new Date(),
        ...data,
      },
    ])
    reset()
  }

  return (
    <ThemedView style={styles.formWrapper}>
      {formConfig.map(({ id, name, label, placeholder }) => (
        <Controller
          key={id}
          control={control}
          name={name}
          render={({ field }) => (
            <View>
              <InputForm
                label={label}
                placeholder={placeholder}
                placeholderTextColor={textColor}
                onChangeText={field.onChange}
                {...field}
              />
              {errors[name] && (
                <Text style={styles.error}>{errors[name].message}</Text>
              )}
            </View>
          )}
        />
      ))}
      <Button
        title="Submit"
        onPress={handleSubmit(
          onSubmit as SubmitHandler<{ [x: string]: string }>
        )}
      />
    </ThemedView>
  )
}

export default AddTaskForm

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    gap: 12,
  },
  error: { color: 'red' },
})
