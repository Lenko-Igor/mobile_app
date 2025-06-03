import { Tabs } from 'expo-router'
import React, { FC } from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import Entypo from '@expo/vector-icons/Entypo'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { ROUTES } from '@/constants/routes'

const TAB_TITLE = {
  LIST: 'Task List',
  ADD_ITEM: 'Add New Task',
}

const TabLayout: FC = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name={ROUTES.LIST}
        options={{
          title: TAB_TITLE.LIST,
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ROUTES.ADD_NEW_TASK}
        options={{
          title: TAB_TITLE.ADD_ITEM,
          tabBarIcon: ({ color }) => (
            <Entypo name="add-to-list" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
