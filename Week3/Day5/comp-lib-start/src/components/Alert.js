// components/Alert.js
import React from 'react';

const Alert = ({ message, type }) => {
    const alertStyle = {
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '5px',
      color: '#FFFF00',
      backgroundColor: type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue',
      textAlign: 'center', // Center text
    };
  
    return <div style={alertStyle}>{message}</div>;
  };
  
  export default Alert;
