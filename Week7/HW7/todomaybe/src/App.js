import React, { useState } from 'react';
import Modal from 'react-modal';
import TodoProvider from './components/TodoContext';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import Confetti from 'react-confetti';
import Accordion from './components/Accordion';
import NavBar from './components/NavBar';
import './App.css';

//root is needed to keep the focus on the modal when it pops up, accessibility is blocked
Modal.setAppElement('#root');

const App = () => {
  const [glasses, setGlasses] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('todo');

  const addGlass = () => {
    if (glasses < 8) {
      setGlasses(glasses + 1);
      if (glasses + 1 === 8) {
        setShowConfetti(true);
        setModalIsOpen(true);
        setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts for 5 seconds
      }
    }
  };

  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //For the glasses it creates an empty array with the number corresponding
  //When it reaches that number the .map makes the glass visible
  return (
    <TodoProvider>
      <div className="App">
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.5} />}
        {currentPage === 'todo' ? (
          <>
            <h1>Fitness To-Do List</h1>
            <p>How much did you drink?</p>
            <div className="water-log">
              {Array.from({ length: glasses }).map((_, index) => (
                <span key={index} className="glass" aria-label="water-glass">🥛</span>
              ))}
            </div>
            <p>1 glass = 1 bottle of water</p>
            <div className="button-group">
              <button onClick={addGlass}>+</button>
              <button onClick={removeGlass}>-</button>
            </div>
            <CreateTodo />
            <TodoList />
          </>
        ) : (
          <>
            <h1>Workout Exercises</h1>
            <Accordion
              title="Arm Workout"
              content={
                <>
                  <h4>Bicep Curls</h4>
                  <div><input type="checkbox" /> 3-4 sets</div>
                  <div><input type="checkbox" /> 10-15 reps</div>
                </>
              }
            />
            <Accordion
              title="Cardio Workout"
              content={
                <>
                  <h4>Burpees</h4>
                  <div><input type="checkbox" /> 5 sets</div>
                  <div><input type="checkbox" /> 15-20 reps</div>
                </>
              }
            />
            <Accordion
              title="Core Workout"
              content={
                <>
                  <h4>Planks</h4>
                  <div><input type="checkbox" /> 5 sets</div>
                  <div><input type="checkbox" /> 15-20 reps</div>
                </>
              }
            />
            <Accordion
              title="Glute Workout"
              content={
                <>
                  <h4>Glute Bridges</h4>
                  <div><input type="checkbox" /> 3-4 sets</div>
                  <div><input type="checkbox" /> 15-20 reps</div>
                </>
              }
            />
            <Accordion
              title="Leg Workout"
              content={
                <>
                  <h4>Squats</h4>
                  <div><input type="checkbox" /> 3 sets</div>
                  <div><input type="checkbox" /> 10-15 reps</div>
                </>
              }
            />
          </>
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Daily Water Intake Reached"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>💪 Look at you staying hydrated! 💪</h2>
          <button onClick={closeModal}>Close</button>
        </Modal>
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </TodoProvider>
  );
};

export default App;
