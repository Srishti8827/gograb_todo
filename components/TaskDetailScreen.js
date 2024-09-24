// screens/TaskDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getTaskById, deleteTask } from '../database/db';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch task details from SQLite
  }, []);

  const handleDeleteTask = () => {
    deleteTask(taskId, () => navigation.goBack());
  };

  if (!task) return null;

  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Status: {task.status}</Text>
      <Button title="Delete Task" onPress={handleDeleteTask} />
    </View>
  );
}
