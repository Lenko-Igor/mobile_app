import React, { FC, useContext } from 'react'
import ThemedView from '../templates/ThemedView'
import { Button, StyleSheet, View, ViewProps, Text } from 'react-native'
import { formConfig } from './addTaskForm.config'
import { Controller, useForm } from 'react-hook-form'
import InputForm from '../InputForm'
import { useThemeColor } from '@/hooks/useThemeColor'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './addTaskForm.schema'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { LOCAL_STORAGE_KEY } from '@/constants/general'
import { TasksContext } from '@/contexts/tasksContext'
export type AddTaskFormType = ViewProps & {
  lightColor?: string
  darkColor?: string
}
const AddTaskForm: FC = ({ lightColor, darkColor }: AddTaskFormType) => {
  const [context, setData] = useContext(TasksContext)
  const { getItem, setItem } = useAsyncStorage(LOCAL_STORAGE_KEY)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  )
  console.log(context?.[1])

  const onSubmit = async (data: any) => {
    try {
      const itemFromStorage = await getItem()
      const result = itemFromStorage != null ? JSON.parse(itemFromStorage) : []
      const jsonValue = JSON.stringify([...result, data])
      await setItem(jsonValue)
      context?.[1](result)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ThemedView style={styles.formWrapper}>
      {formConfig.map(({ id, name, label, placeholder }) => (
        <Controller
          key={id}
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <View>
              <InputForm
                label={label}
                placeholder={placeholder}
                placeholderTextColor={textColor}
                onChangeText={onChange}
              />
              {errors[name] && (
                <Text style={styles.error}>{errors[name].message}</Text>
              )}
            </View>
          )}
        />
      ))}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
