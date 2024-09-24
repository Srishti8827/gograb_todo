// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { getGroups, addGroup } from '../database/db';

export default function HomeScreen({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = () => {
    getGroups(result => setGroups(result._array));
  };

  const handleAddGroup = () => {
    addGroup(newGroup, fetchGroups);
    setNewGroup('');
  };

  return (
    <View>
      <TextInput
        placeholder="New Group"
        value={newGroup}
        onChangeText={setNewGroup}
      />
      <Button title="Add Group" onPress={handleAddGroup} />
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate('TodoList', { groupId: item.id })}>
            {item.name}
          </Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
