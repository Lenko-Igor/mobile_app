import InputForm from "@/components/InputForm";
import AppContentLayout from "@/components/layouts/AppContentLayout";
import ThemedView from "@/components/templates/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Button, StyleSheet, Text, ViewProps } from "react-native"
import { useForm, Controller  } from "react-hook-form";
import { ThemedText } from "@/components/templates/ThemedText";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const CreateTask = ({ lightColor, darkColor }: ThemedViewProps) => {
    const { 
      control,
      handleSubmit,
      formState: { errors },
     } = useForm()
    const [title, onChangeTitle] = React.useState('');
    const [description, onChangeDescription] = React.useState('');
    const [date, onChangeDate] = React.useState('');
    const [location, onChangeLocation] = React.useState('');
    
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    const onSubmit = (data: any) => {
      console.log(data);
    };

    return (
    <AppContentLayout title={'Add a New Field Task'}>
      <ThemedView style={styles.formWrapper}>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange } }) => (
            <InputForm 
              label="Task Title"
              placeholder="Enter title"
              placeholderTextColor={textColor}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange } }) => (
            <InputForm 
              label="Task Description"
              placeholder="Enter description"
              placeholderTextColor={textColor}
              onChangeText={onChange}
            />
          )}
        />
        {errors.title && <ThemedText style={styles.error}>{'error'}</ThemedText>}

        <InputForm 
          label="Date and Time of Execution"
          placeholder="Enter date and time"
          placeholderTextColor={textColor}
          onChangeText={onChangeDate}
          value={date}
        />
        <InputForm 
          label="Location"
          placeholder="Enter location"
          placeholderTextColor={textColor}
          onChangeText={onChangeLocation}
          value={location}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ThemedView>
    </AppContentLayout>
    )
}

export default CreateTask;

const styles = StyleSheet.create({
    formWrapper: { 
      flex: 1, 
      gap: 12,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    error: { color: 'red' }
})