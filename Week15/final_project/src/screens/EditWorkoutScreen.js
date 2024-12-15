import React, { useContext, useState } from 'react'; //This brings in React and two specific hooks (useContext and useState). These hooks help manage state and context in our component.
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'; //This imports several components from React Native:
import { Context as WorkoutContext } from '../context/WorkoutContext'; //This imports the context we use to manage workout data across the app.

const EditWorkoutScreen = ({ navigation }) => { //This defines the EditWorkoutScreen component. It takes navigation as a prop, which allows it to navigate between different screens in the app.
  const id = navigation.getParam('id'); //This gets the id from the navigation. It identifies which workout to edit.
  const { state, editWorkout } = useContext(WorkoutContext); //useContext to get the current state and the editWorkout function from the WorkoutContext.
  const workout = state.find((workout) => workout.id === id); //This searches the state for a workout that matches the id. 
  //If found, it assigns that workout to the workout object.

  if (!workout) { //If the workout is not found (!workout), the component displays nothing.
    return null; // Handle case where workout is not found
  }
 
  const [exercise, setExercise] = useState(workout.exercise); //creates a state variable for the exercise name, initialized with the workout's exercise name.
  const [sets, setSets] = useState(workout.sets.toString()); //creates a state variable for the number of sets, initialized with the workout's sets converted to a string.
  const [reps, setReps] = useState(workout.reps.toString()); //creates a state variable for the number of reps per set, initialized with the workout's reps converted to a string.
  const [weight, setWeight] = useState(workout.weight.toString()); //creates a state variable for the weight used in the workout, initialized with the workout's weight converted to a string.
  const [notes, setNotes] = useState(workout.notes || ''); //creates a state variable for workout notes, initialized with the workout's notes if they exist, otherwise as an empty string.

  const handleSave = () => { 
    if (!exercise || !sets || !reps || !weight) { //If any of the fields are empty, it shows an alert and stops the function.
      alert('Please fill in all fields!');
      return;
    }

    editWorkout(id, { //It calls the editWorkout function with the current state values and the id.
      exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight),
      notes,  // Include notes in the workout data
    }, () => navigation.navigate('View', { id })); //After saving, it navigates back to the view screen.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Workout</Text>

      <Text style={styles.label}>Exercise:</Text>
      <TextInput
        style={styles.input}
        value={exercise}
        onChangeText={setExercise}
        placeholder="Enter exercise"
      />

      <Text style={styles.label}>Sets:</Text>
      <TextInput
        style={styles.input}
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
        placeholder="Enter sets"
      />

      <Text style={styles.label}>Reps:</Text>
      <TextInput
        style={styles.input}
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
        placeholder="Enter reps"
      />

      <Text style={styles.label}>Weight (lbs):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        placeholder="Enter weight"
      />

      <Text style={styles.label}>Notes:</Text>
      <TextInput
        style={styles.input}
        value={notes}
        onChangeText={setNotes}
        placeholder="Enter any notes about the workout"
        multiline
      />

      <Button title="Save Workout" onPress={handleSave} />
    </View>
  );
};

EditWorkoutScreen.navigationOptions = {
  title: 'Edit Workout',
  headerStyle: {
    backgroundColor: '#e39695', // Set the header background color to match the screen background
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#e39695', // Muted green background
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: '#fff',
  },
});

export default EditWorkoutScreen;
