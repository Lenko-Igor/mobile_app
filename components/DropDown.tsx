import { bgColorStatus, Colors } from '@/constants/Colors'
import { STATUS_NAME } from '@/constants/general'
import { StatusEnum } from '@/types/enums'
import React, { FC } from 'react'
import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

type OptionsType = {
  label: string
  value: StatusEnum
}

const options: OptionsType[] = [
  { label: STATUS_NAME[StatusEnum.InProgress], value: StatusEnum.InProgress },
  { label: STATUS_NAME[StatusEnum.Completed], value: StatusEnum.Completed },
  { label: STATUS_NAME[StatusEnum.Cancelled], value: StatusEnum.Cancelled },
]

type DropDownType = {
  status: StatusEnum
  onChange: (status: StatusEnum) => void
}

const DropDown: FC<DropDownType> = ({ status, onChange }) => {
  const colorScheme = useColorScheme()

  const renderItem = (item: OptionsType) => {
    return (
      <Text style={{ ...styles.textItem, color: bgColorStatus[item.value] }}>
        {item.label}
      </Text>
    )
  }

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={{
        ...styles.selectedTextStyle,
        backgroundColor: bgColorStatus[status],
        color: Colors[colorScheme ?? 'light'].tint,
      }}
      data={options}
      maxHeight={200}
      labelField="label"
      valueField="value"
      value={status}
      onChange={(item) => {
        onChange(item.value)
      }}
      renderItem={renderItem}
    />
  )
}

export default DropDown

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 14,
  },
  selectedTextStyle: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 14,
    backgroundColor: 'red',
    width: 70,
  },
  textItem: {
    textAlign: 'center',
    lineHeight: 14,
    fontSize: 14,
    padding: 12,
    fontWeight: 'bold',
  },
})
