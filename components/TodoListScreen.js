// screens/TodoListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getTasks, markTaskCompleted } from '../database/db';

export default function TodoListScreen({ route, navigation }) {
  const [tasks, setTasks] = useState([]);
  const { groupId } = route.params;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    getTasks(groupId, result => setTasks(result._array));
  };

  const handleCompleteTask = (taskId) => {
    markTaskCompleted(taskId, fetchTasks);
  };

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title} - {item.status}</Text>
            <Button title="Complete Task" onPress={() => handleCompleteTask(item.id)} />
            <Button title="View Details" onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('TaskCreation', { groupId })} />
    </View>
  );
}
