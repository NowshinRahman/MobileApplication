import React, { useState, useEffect } from 'react'; //Bring in React and some helper functions (useState, useEffect) to help us build the component.
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; //Get some components from React Native to build the mobile app's user interface.
import ProgressBar from './ProgressBar'; //Bring in a progress bar component we created elsewhere.

//This is for user inputs
const WorkoutForm = ({ initialValues, onSubmit }) => { //Create a component called WorkoutForm that takes in some initial values and a function to run when submitting the form.
  const [exercise, setExercise] = useState(initialValues.exercise); //Keep track of the exercise name. Start with the value given in initialValues.
  const [sets, setSets] = useState(initialValues.sets); //Keep track of the number of sets. Start with the value given in initialValues.
  const [reps, setReps] = useState(initialValues.reps); //Keep track of the number of reps. Start with the value given in initialValues.
  const [weight, setWeight] = useState(initialValues.weight); //Keep track of the weight for the exercise. Start with the value given in initialValues.
  const [completedReps, setCompletedReps] = useState(0); //Keep track of how many reps have been completed. Start at zero.
  const [progress, setProgress] = useState(0); //Keep track of the workout progress. Start at zero.

  useEffect(() => { //Run some code when the component first loads or when certain values change.
    if (initialValues.sets && initialValues.reps) { //Make sure initial values are given for sets and reps.
      const parsedSets = parseInt(initialValues.sets); //Convert the sets values from strings to numbers.
      const parsedReps = parseInt(initialValues.reps); //Convert the reps values from strings to numbers.
      if (!isNaN(parsedSets) && !isNaN(parsedReps) && parsedSets > 0 && parsedReps > 0) { //the sets and reps are numbers and bigger than 0
        setProgress(completedReps / (parsedSets * parsedReps)); //reps is out of the total reps by multiplying set and reps
      }
    }
  }, [initialValues.sets, initialValues.reps, completedReps]); //Run this effect whenever sets, reps, or completed reps change.

  //Define a function that will run when a rep is completed.
  const handleCompleteRep = () => {
    const newCompletedReps = completedReps + 1; //Increase the number of completed reps by one.
    setCompletedReps(newCompletedReps); //Save the new number of completed reps and recalculate progress.
    updateProgress(newCompletedReps, sets, reps);
  };

  //Define a function that will run when a rep needs to be undone.
  const handleUndoRep = () => { 
    const newCompletedReps = completedReps > 0 ? completedReps - 1 : 0; //Decrease the number of completed reps by one, but not below zero.
    setCompletedReps(newCompletedReps); //Save the new number of completed reps and recalculate progress.
    updateProgress(newCompletedReps, sets, reps);
  };

  //Define a function to calculate progress based on completed reps, sets, and reps.
  const updateProgress = (completedReps, sets, reps) => { 
    const parsedSets = parseInt(sets); //Convert sets from strings to numbers.
    const parsedReps = parseInt(reps); //Convert reps from strings to numbers.
    if (!isNaN(parsedSets) && !isNaN(parsedReps) && parsedSets > 0 && parsedReps > 0) { //If the sets and reps are valid numbers, calculate the progress.
      setProgress(completedReps / (parsedSets * parsedReps));
    } else { // Otherwise, set progress to zero.
      setProgress(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Goal For Today</Text>
      <Text style={styles.label}>Exercise:</Text>
      <TextInput
        style={styles.input}
        value={exercise}
        onChangeText={setExercise}
      /> 
      <Text style={styles.label}>Sets:</Text>
      <TextInput
        style={styles.input}
        value={sets}
        onChangeText={(value) => {
          setSets(value);
          updateProgress(completedReps, value, reps);
        }}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Reps:</Text>
      <TextInput
        style={styles.input}
        value={reps}
        onChangeText={(value) => {
          setReps(value);
          updateProgress(completedReps, sets, value);
        }}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Weight (lbs):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <ProgressBar progress={progress} />
      <Button title="Complete Rep" onPress={handleCompleteRep} />
      <Button title="Undo Rep" onPress={handleUndoRep} />
      <Button title="Save Workout" onPress={() => onSubmit({ exercise, sets: parseInt(sets), reps: parseInt(reps), weight })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default WorkoutForm;
