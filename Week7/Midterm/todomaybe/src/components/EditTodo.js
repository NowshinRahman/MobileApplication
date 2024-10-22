import React, { useState, useContext } from 'react';
import { TodoContext } from '../components/TodoContext';
// using state and accessing context

const EditTodo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);
  const [priority, setPriority] = useState(todo.priority);
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  //preventDefault, doesn't refresh the page while submitting the new information
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({
      ...todo,
      title,
      status,
      priority,
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={handleChangeStatus}>
        <option value="Accomplished">Accomplished</option>
        <option value="Almost">Almost There</option>
        <option value="Haven't Done">Haven't Done</option>
      </select>
      <select value={priority} onChange={handleChangePriority}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Update</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </form>
  );
};

export default EditTodo;
