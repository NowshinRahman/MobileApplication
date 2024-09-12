// import react and reactdom libraries for use
import React from 'react';
import ReactDOM from 'react-dom/client';
// import our main parent app component
import App from './App';

//grab and store our root div element as a var
const root = ReactDOM.createRoot(document.getElementById('root'));
//use react dom to render our react project inside that

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
