import React, { createContext, useState } from 'react';

export const TodoContext = createContext();
//accessible within a child components, functions of todos

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  //if todo matches the updated todo then use the updatedtodo or else use original
  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  };

  //removes todo by id, keeps the other todo but removes the one I want
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //provides data that is available for all child components
  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
