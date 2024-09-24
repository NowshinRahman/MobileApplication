import React, { useState } from 'react';
import Alert from '../components/Alert';

const AlertPage = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const triggerAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 4000);  
  };

  const closeAlert = () => {
    setAlertMessage('');
    setAlertType('');
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120vh',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20"> 
      <h1>Alert Page</h1>

      <div style={buttonContainerStyle}>
        <button
          className="bg-red-600 text-black py-8 px-6 rounded"
          onClick={() => triggerAlert('One of the buttons can be right :)', 'success')}
        >
          Red Pill
        </button>
        
        <button
          style={buttonStyle}
          onClick={() => triggerAlert('Or it can be wrong :(', 'error')}
        >
          Blue Pill
        </button>
      </div>

      {alertMessage && <Alert message={alertMessage} type={alertType} onClose={closeAlert} />}
    </div>
  );
};

export default AlertPage;
