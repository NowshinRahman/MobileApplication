import createDataContext from './createDataContext'; // Bring in createDataContext from another file.

//updates the workout app by adding, deleting, editing, and tracking workout progress
const workoutReducer = (state, action) => { // This function manages changes to the workout data. It takes the current state and an action as inputs
  switch (action.type) { //It checks the type of action that is being performed.
    case 'add_workout': // If the action type is 'add_workout', add a new workout to the state.
      return [...state, { id: Math.floor(Math.random() * 10000), ...action.payload }]; 
      //Take everything in the current state (all the existing workouts) and make a copy of it.
      //Math.random creates a number from 0 to 1 and then we multiply it by 10000, then we use floor to round down.
      //Create a random number between 0 and 9999 to use as a unique ID for the new workout.
      //Take all the details of the new workout (like exercise name, sets, reps, etc.) from action.payload.

    case 'delete_workout': // If the action type is 'delete_workout', remove the workout with the matching ID from the state.
      return state.filter(workout => workout.id !== action.payload); 
      //creates a new array that will find the unique id of the current workoutand 
       //then the action.payload is the id of the workout that we want to delete. 
       //If it's not equal to the action.payload then it stays, but if it is then we remove it from the new array

    case 'edit_workout': //If the action type is edit_workout, update the workout with the matching ID with the new data.
      return state.map(workout => workout.id === action.payload.id ? action.payload : workout);

    case 'track_progress': //If the action type is track_progress, update the number of completed reps for the workout with the matching ID.
      return state.map(workout =>
        workout.id === action.payload.id //Checks if the current workout's ID matches the ID in action.payload.
          ? { ...workout, completedReps: action.payload.completedReps } //If/else statement. the condition ? expressionTrue: expressionFalse
          //keeps the stuff in workout 
          //update CompletedRep with the new stuff from action.payload.completedReps
          : workout //If the id does not match, just return the workout as it is, without any changes
      );
    default: //If the action type doesn't match any case, return the current state unchanged.
      return state;
  }
};

//Define a function addWorkout that dispatches an action to add a workout.
const addWorkout = dispatch => workout => {
  dispatch({ type: 'add_workout', payload: workout });
};
//dispatch is a reducer function to help to send actions to reducer to make changes to the state
//type==type of change being made
//payload==data

//Define a function deleteWorkout that dispatches an action to delete a workout by ID.
const deleteWorkout = dispatch => id => {
  dispatch({ type: 'delete_workout', payload: id });
};

//Define a function editWorkout that dispatches an action to update a workout by ID. It can also run an optional callback function after dispatching.
const editWorkout = dispatch => (id, updatedWorkout, callback) => {
  dispatch({ type: 'edit_workout', payload: { id, ...updatedWorkout } });
  if (callback) {
    callback();
  }
};

//Define a function trackProgress that displays an action to update the progress the completed id of a workout by ID.
const trackProgress = dispatch => (id, completedReps) => {
  dispatch({ type: 'track_progress', payload: { id, completedReps } });
};

//Use createDataContext to create and export the Provider and Context. The Provider will wrap the app, giving components access to the state and actions.
export const { Provider, Context } = createDataContext(
  workoutReducer,
  { addWorkout, deleteWorkout, editWorkout, trackProgress }, // Include trackProgress
  []
);
