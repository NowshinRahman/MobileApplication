import React, { useState, useContext } from 'react';
import { TodoContext } from '../components/TodoContext';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Haven\'t Done');
  const [priority, setPriority] = useState('Low');
  const { addTodo } = useContext(TodoContext);

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  //the trim is to make sure if the user submitted an empty input, it returns early
  //without adding anything new
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }

    //changes the id string unique with random numbers, converts it into a string of 36 
    //charcaters and numbers and then extracts the third till 9th characters
    addTodo({
      id: Math.random().toString(36).substr(2, 9),
      title,
      status,
      priority,
    });
    setTitle('');
    setStatus('Haven\'t Done');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter workout"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={handleChangeStatus}>
        <option value="Accomplished">Accomplished</option>
        <option value="Almost">Almost</option>
        <option value="Haven't Done">Haven't Done</option>
      </select>
      <select value={priority} onChange={handleChangePriority}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default CreateTodo;
