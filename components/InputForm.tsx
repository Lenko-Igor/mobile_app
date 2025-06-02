import React, { FC } from 'react'
import ThemedView from './templates/ThemedView'
import { ThemedText } from './templates/ThemedText'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

type InputFormType = TextInputProps & {
    label?: string;
    lightColor?: string;
    darkColor?: string;
}

const InputForm: FC<InputFormType> = ({ label, lightColor, darkColor, ...props }) => {
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return (
    <ThemedView>
        {!!label && (
            <ThemedText type="default" style={styles.label}>
                {`${label}:`}
            </ThemedText>
        )}
        <TextInput
            style={[{ ...styles.input, color: textColor }]}
            {...props}
        />
    </ThemedView>
  )
};

export default InputForm;

const styles = StyleSheet.create({
    label: {
        marginBottom: 6,        
    },
    input: {
        height: 40,
        padding: 12,
        borderWidth: 1,
    }
})