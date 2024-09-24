// screens/TaskCreationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTask } from '../database/db';

export default function TaskCreationScreen({ route, navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { groupId } = route.params;

  const handleSaveTask = () => {
    addTask(title, description, groupId, () => navigation.goBack());
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save Task" onPress={handleSaveTask} />
    </View>
  );
}
