import React from 'react';
import { FaRegClipboard, FaDumbbell } from 'react-icons/fa';

const NavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="nav-bar">
      <button className={`nav-item ${currentPage === 'todo' ? 'active' : ''}`} onClick={() => setCurrentPage('todo')}>
        <FaRegClipboard />
        <span>To-Do List</span>
      </button>
      <button className={`nav-item ${currentPage === 'accordion' ? 'active' : ''}`} onClick={() => setCurrentPage('accordion')}>
        <FaDumbbell />
        <span>Workout</span>
      </button>
    </nav>
  );
};

export default NavBar;
