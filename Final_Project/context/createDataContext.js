import React, { useReducer } from 'react'; //I brought in the useReducer function from the React library

//reducers help handle the change of state if it becomes too complex
//updates the app so we can transfer data globally in the app without having to constantly using prop
export default (reducer, actions, initialState) => { //creating and exporting a function that takes 
  //reducer, actions, and initialState.
  const Context = React.createContext(); // We create a new context. 
  //This context will let us share data across different parts of our app without passing props manually.

  const Provider = ({ children }) => { // The Provider is a component that will wrap around children components 
    //to give them access to the context.
    const [state, dispatch] = useReducer(reducer, initialState); // useReducer helps manage state. 
    //It takes in the reducer and the initialState. It gives us the current state and a way to update it (dispatch)

    const boundActions = {}; // We create an empty object to store functions that can change the state
    for (let key in actions) { // We loop through each action in the actions object.
      boundActions[key] = actions[key](dispatch); // We connect each action to the dispatch function and 
      //store it in boundActions
    }
    
    return ( // We return the Context.Provider component.
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider }; // We return both the Context and the Provider so other parts of the app can use them.
};
