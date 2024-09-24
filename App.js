// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import TodoListScreen from './components/TodoListScreen';
import TaskDetailScreen from './components/TaskDetailScreen';
import TaskCreationScreen from './components/TaskCreationScreen';
import { createTables } from './database/db';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    createTables(); // Initialize the SQLite database
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
