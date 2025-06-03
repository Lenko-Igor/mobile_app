import { useThemeColor } from '@/hooks/useThemeColor'
import { FC } from 'react'
import { View, type ViewProps } from 'react-native'

export type ThemedSafeAreaViewType = ViewProps & {
  lightColor?: string
  darkColor?: string
}

const ThemedView: FC<ThemedSafeAreaViewType> = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}

export default ThemedView
