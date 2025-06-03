/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { StatusEnum } from '@/types/enums'

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    titlePage: '#083e73',
  },
  dark: {
    text: '#ECEDEE',
    background: '#282828',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    titlePage: '#81b6ea',
  },
}

export const bgColorStatus: { [key in StatusEnum]: string } = {
  [StatusEnum.InProgress]: tintColorLight,
  [StatusEnum.Completed]: 'green',
  [StatusEnum.Cancelled]: 'red',
}
