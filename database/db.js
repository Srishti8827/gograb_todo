// database/db.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todos.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        status TEXT,
        group_id INTEGER
      );`
    );
  });
};

export const addGroup = (name, callback) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO groups (name) values (?)', [name], (_, result) => callback(result));
  });
};

export const getGroups = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM groups', [], (_, { rows }) => callback(rows));
  });
};

export const addTask = (title, description, groupId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tasks (title, description, status, group_id) values (?, ?, ?, ?)',
      [title, description, 'pending', groupId],
      (_, result) => callback(result)
    );
  });
};

export const getTasks = (groupId, callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM tasks WHERE group_id = ?', [groupId], (_, { rows }) => callback(rows));
  });
};

export const markTaskCompleted = (taskId, callback) => {
  db.transaction(tx => {
    tx.executeSql('UPDATE tasks SET status = ? WHERE id = ?', ['completed', taskId], (_, result) => callback(result));
  });
};
