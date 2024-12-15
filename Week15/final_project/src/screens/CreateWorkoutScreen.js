import React, { useState, useContext, useEffect } from 'react'; //helps manage state
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; //builds up the layout of the app
import { Context as WorkoutContext } from '../context/WorkoutContext'; //brings workoutcontext from its page

const CreateWorkoutScreen = ({ navigation }) => { //function that takes navigation as a prop, it to navigate between different screens in the app.
  const { id } = navigation.state.params || {}; //gets id parameter from the navigation state. If id is not found 
  //it shows an empty object
  const { state, addWorkout, editWorkout } = useContext(WorkoutContext); //Get state, addWorkout, and editWorkout functions from the workout context
  const workout = id ? state.find((workout) => workout.id === id) : null; //This searches the state for a workout that matches the id. 
  //If found, it assigns that workout to the workout variable. If not, workout is set to null.
  const [exercise, setExercise] = useState(workout ? workout.exercise : ''); //This creates a state variable for the exercise name. If workout exists, it initializes with the workout's exercise name; otherwise, it starts as an empty string.
  const [sets, setSets] = useState(workout ? workout.sets.toString() : ''); //This creates a state variable for the number of sets. If workout exists, it initializes with the workout's sets converted to a string; otherwise, it starts as an empty string.
  const [reps, setReps] = useState(workout ? workout.reps.toString() : ''); //This creates a state variable for the number of reps per set. If workout exists, it initializes with the workout's reps converted to a string; otherwise, it starts as an empty string.
  const [weight, setWeight] = useState(workout ? workout.weight.toString() : ''); //This creates a state variable for the weight used in the workout. If workout exists, it initializes with the workout's weight converted to a string; otherwise, it starts as an empty string.
  const [notes, setNotes] = useState(workout ? workout.notes : ''); //This creates a state variable for workout notes. If workout exists, it initializes with the workout's notes; otherwise, it starts as an empty string
 
  //This useEffect hook runs whenever workout changes. It updates all the state variables to match the workout details.
  useEffect(() => {
    if (workout) { //if workout exists, then the code runs
      setExercise(workout.exercise); //the setExercise state to the exercise name
      setSets(workout.sets.toString()); //converts the set to a string, inputs are usually in strings
      setReps(workout.reps.toString()); //converts reps to a string
      setWeight(workout.weight.toString());//converts weight to a string
      setNotes(workout.notes); // Set notes if they exist
    }
  }, [workout]); //run anytime there are changes

  //This function runs when the workout is saved. It checks if all fields are filled and numeric.
  // If any check fails, it shows an alert and stops the function.
  const handleSave = () => {
    if (!exercise || !sets || !reps || !weight) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    //converts strings into numbers
    const parsedSets = parseInt(sets);
    const parsedReps = parseInt(reps);
    const parsedWeight = parseFloat(weight);

    if (isNaN(parsedSets) || isNaN(parsedReps) || isNaN(parsedWeight)) {
      Alert.alert('Error', 'Sets, Reps, and Weight must be numbers!');
      return;
    }

    if (id) {
      // Editing an existing workout
      editWorkout(id, { //updates the new workout information inputs
        exercise,
        sets: parsedSets,
        reps: parsedReps,
        weight: parsedWeight,
        notes, // Include notes in the workout data
      });
    } else { //if the id is not made
      // Adding a new workout
      addWorkout({ //creates a whole new workout screen
        exercise,
        sets: parsedSets,
        reps: parsedReps,
        weight: parsedWeight,
        completedReps: 0, // Ensure new workout starts with 0 completed reps
        notes, // Include notes in the workout data
      });
    }
    navigation.navigate('Index'); //after editing or creating a new workout page, we go back to the Index screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Goal</Text>

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

CreateWorkoutScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#e39695', // Set the header background color to match the screen background
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#e39695', // Background color
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

export default CreateWorkoutScreen;
