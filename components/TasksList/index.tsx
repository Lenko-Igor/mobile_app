import { TasksContext } from '@/contexts/tasksContext'
import { OrderType, TaskType } from '@/types/types'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, FlatList, StatusBar, StyleSheet } from 'react-native'
import { ThemedText } from '../templates/ThemedText'
import ThemedView from '../templates/ThemedView'
import Item from './Item'

const TasksList: FC = () => {
  const { tasks, removeTask, getTasksData } = useContext(TasksContext)
  const [order, setOrder] = useState<OrderType>('asc')

  const renderItem = ({ item }: { item: TaskType }) => {
    return (
      <Item
        item={item}
        onPress={() => removeTask(item.id)}
        backgroundColor={'#bfc8b3'}
        textColor={'black'}
      />
    )
  }

  const handleSortBtn = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  useEffect(() => {
    getTasksData(order)
  }, [order])

  return (
    <ThemedView style={styles.container}>
      {tasks?.length ? (
        <Button title={'Sort by date added'} onPress={handleSortBtn} />
      ) : (
        <ThemedText
          type="subtitle"
          style={{ textAlign: 'center', paddingVertical: 30 }}
        >
          This task list is empty !
        </ThemedText>
      )}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
