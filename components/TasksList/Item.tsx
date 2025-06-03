import { Colors } from '@/constants/Colors'
import { TasksContext } from '@/contexts/tasksContext'
import { TaskType } from '@/types/types'
import Ionicons from '@expo/vector-icons/Ionicons'
import dayjs from 'dayjs'
import { FC, useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import DropDown from '../DropDown'
import { ThemedText } from '../templates/ThemedText'
import { StatusEnum } from '@/types/enums'

type ItemPropsType = {
  item: TaskType
  onPress: () => void
  backgroundColor: string
  textColor: string
}

const Item: FC<ItemPropsType> = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}) => {
  const { updateTaskStatus } = useContext(TasksContext)
  return (
    <View style={[styles.item, { backgroundColor }]}>
      <View style={styles.card}>
        <View style={{ flex: 3, justifyContent: 'space-between' }}>
          <View>
            <ThemedText
              type="subtitle"
              style={[styles.title, { color: textColor }]}
            >
              {item.title ?? ''}
            </ThemedText>
            <ThemedText
              type="default"
              style={[styles.description, { color: textColor }]}
            >
              {item.description ?? ''}
            </ThemedText>
          </View>
          <ThemedText
            type="default"
            style={[styles.date, { color: Colors['light'].tint }]}
          >
            {dayjs(item.createDate).format('MMM D, YYYY h:mm A') ?? ''}
          </ThemedText>
        </View>

        <View style={styles.actions}>
          <DropDown
            status={item.status}
            onChange={(status: StatusEnum) => updateTaskStatus(item.id, status)}
          />
          <TouchableOpacity onPress={onPress} style={{ width: 24 }}>
            <Ionicons
              name="trash-outline"
              size={24}
              color="red"
              style={{ textAlign: 'right' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  item: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    height: 100,
    marginVertical: 8,
  },
  card: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  title: {},
  description: {
    lineHeight: 14,
    fontSize: 12,
  },
  actions: {
    flex: 1,
    width: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
  },
})
