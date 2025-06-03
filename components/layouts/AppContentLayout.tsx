import { useThemeColor } from '@/hooks/useThemeColor'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import {
  SafeAreaProvider,
  SafeAreaView,
  type SafeAreaProviderProps,
} from 'react-native-safe-area-context'
import { ThemedText } from '../templates/ThemedText'

export type AppContentLayoutType = SafeAreaProviderProps & {
  lightColor?: string
  darkColor?: string
  title?: string
}

const AppContentLayout: FC<AppContentLayoutType> = ({
  lightColor,
  darkColor,
  title,
  children,
}) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )
  const titleColor = useThemeColor({}, 'titlePage')

  return (
    <SafeAreaProvider style={{ backgroundColor }}>
      <SafeAreaView style={styles.container}>
        {title && (
          <ThemedText type="title" style={{ color: titleColor }}>
            {title}
          </ThemedText>
        )}
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default AppContentLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 24,
  },
})
