// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      if (editIndex !== null) {
        // Update existing todo
        const updatedTodos = todos.map((todo, index) => 
          index === editIndex ? input : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null); // Clear edit mode
      } else {
        // Add new todo
        setTodos([...todos, input]);
      }
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>Gym To-Do List</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add or edit a workout..." 
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
