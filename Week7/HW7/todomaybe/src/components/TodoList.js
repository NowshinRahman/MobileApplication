import React, { useContext } from 'react';
import { TodoContext } from '../components/TodoContext';
import EditTodo from './EditTodo';
import classNames from 'classnames';

const TodoList = () => {
  //access list from the Provider in TodoContext
  const { todos } = useContext(TodoContext);

  const getStatusClass = (status) => {
    return classNames({
      'accomplished': status === 'Accomplished',
      'almost': status === 'Almost',
      'not-done': status === 'Haven\'t Done',
    });
  };

  //sorts them out by priority values
  const getPriorityValue = (priority) => {
    return priority === 'High' ? 1 : priority === 'Medium' ? 2 : 3;
  };

  // based off of get PriorityValue
  const sortedTodos = [...todos].sort((a, b) => getPriorityValue(a.priority) - getPriorityValue(b.priority));

  //bullet points them into the sortedTodos, labels id, and the classnames
  //showcases the title, status, and priority that the user inputted
  //users can also Edit
  return (
    <ul>
      {sortedTodos.map(todo => (
        <li key={todo.id} className={getStatusClass(todo.status)}>
          <h3>{todo.title} - {todo.status} - {todo.priority}</h3>
          <div className="edit-todo">
            <EditTodo todo={todo} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
