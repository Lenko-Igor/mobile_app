import { TasksContext } from '@/contexts/tasksContext'
import { TaskType } from '@/types/types'
import React, { FC, useContext } from 'react'
import { FlatList, StatusBar, StyleSheet } from 'react-native'
import ThemedView from '../templates/ThemedView'
import Item from './Item'

const TasksList: FC = () => {
  const { tasks, removeTask } = useContext(TasksContext)

  const renderItem = ({ item }: { item: TaskType }) => {
    return (
      <Item
        item={item}
        onPress={() => removeTask(item.id)}
        backgroundColor={'#f9c2ff'}
        textColor={'black'}
      />
    )
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </ThemedView>
  )
}

export default TasksList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})
