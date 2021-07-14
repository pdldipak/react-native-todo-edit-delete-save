import React, { useState, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import Header from './components/Header.js';
import TodoItem from './components/TodoItems.js';
import AddTodo from './components/AddTodo.js';
import EditTodo from './components/EditTodo.js';
import * as S from './Global.styled.js';

const App = () => {
  const [todos, setTodos] = useState([
    // { text: text, id: uuid.v4() },
    // { text: 'Practice Next', id: uuid.v4() },
    // { text: 'Practice React-Native', id: uuid.v4() },
    // { text: 'Practice React-Redux', id: uuid.v4() },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, id: uuid.v4() }, ...prevTodos];
    });
  };

  const deleteHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const handleEditInputChange = (text) => {
    setCurrentTodo({ ...currentTodo, text: text });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = () => {
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@Dipak_todo', jsonValue);
    } catch (error) {
      console.error('Failed to save name.');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Dipak_todo');
      return jsonValue != null ? setTodos(JSON.parse(jsonValue)) : null;
    } catch (error) {
      console.error('Failed to load .');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Wrapper>
        <Header />
        {isEditing ? (
          <EditTodo
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <S.Content>
            <AddTodo submitHandler={submitHandler} save={storeData} />
            <S.List>
              <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    deleteItem={deleteHandler}
                    onEditClick={handleEditClick}
                  />
                )}
              />
            </S.List>
          </S.Content>
        )}
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default App;
