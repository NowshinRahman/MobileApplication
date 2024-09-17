import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'var(--c-blue)', padding: '10px' }}>
      {children}
    </div>
  );
};

export default Wrapper;
