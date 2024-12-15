import React, { useContext, useState, useRef, useEffect } from 'react'; //manage context, state, reference, and effect
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native'; //Use several components from React Native
import { Context as WorkoutContext } from '../context/WorkoutContext'; //This imports the context we use to manage 
import ProgressBar from '../components/ProgressBar'; //Imports the progress bar 
import ConfettiCannon from 'react-native-confetti-cannon'; //Imports the confetti animation

const ViewWorkoutScreen = ({ navigation }) => {//It takes navigation as a prop to navigate between screens.
  const id = navigation.getParam('id'); // Basically we get the id parameter from the 
  //navigation to see what workout we are viewing
  const { state, trackProgress } = useContext(WorkoutContext); //we get the current state and the trackProgress 
  //by calling the context from WorkoutContext
  const workout = state.find((workout) => workout.id === id); //Search the state for a workout that matches the 
  //id. If found, assign that workout to the workout variable.
  const [completedReps, setCompletedReps] = useState(workout.completedReps || 0); //Create a state for the completed 
  //# of reps. The setcompleted updates the value for completed.
  //Then we make it equal to usestate which would allow us to add more states where it calls on the completedReps
  //from workout.If it is null then we return a 0.
  const totalReps = workout.sets * workout.reps; //Calculate the total number of reps (sets multiplied by reps).
  const confettiRef = useRef(null); //Make confetti null so it doesn't start right away
  const [confettiTriggered, setConfettiTriggered] = useState(false); //Create a state variable to track if the 
  //confetti has been triggered. The setConfettiValue updates its value. It starts as false so it's not triggered.
  const [timer, setTimer] = useState(0); //Create a state variable for the timer, starting at 0. It's counting in
  //seconds. The setTimer updates the time.
  const [isRunning, setIsRunning] = useState(false); //Create a state variable to track if the timer is running. 
  //It starts as false so it's not running. The setisRunning updates the value of isRunning.

  //If the number of completed reps is greater than 0 and less than or equal to the total reps, 
  //it calls trackProgress with the updated workout id and completedReps.
  //the [completedReps] will run everytime there is changes to the completedReps
  useEffect(() => {
    if (completedReps > 0 && completedReps <= totalReps) {
      trackProgress(id, completedReps);
    }
  }, [completedReps]);

  //This useEffect hook sets up an interval to increment the timer every second if isRunning is true. If the timer stops, it clears the interval to stop the timer. The hook cleans up by clearing the interval if the component unmounts.
  useEffect(() => {
    let interval; //specifies the interval for the ID
    if (isRunning) {
      interval = setInterval(() => { //set the interval in terms of millisecond
        setTimer(prev => prev + 1); //timer will go up by 1 second which is 1000 millisecond
      }, 1000);
    } else if (!isRunning && timer !== 0) { //if the timer is not running and not 0 we can clear interval
      clearInterval(interval); //we can stop the timer from running
    }
    return () => clearInterval(interval); //makes sure it is perfectedly clear
  }, [isRunning, timer]); //this works when the isRunning and timer changes

  
  const handleCompleteRep = () => { //When a user completes the rep
    if (completedReps < totalReps) { //Check if the completed reps are less than the total reps
      const newCompletedReps = completedReps + 1; //If so make a newcompletedrep, that is one more of the current rep.
      setCompletedReps(newCompletedReps); //use setCompletedRep to update the completed rep

      if (newCompletedReps === totalReps && !confettiTriggered) { //checks if the new number of completed reps equals 
        //the total reps and the confetti hasn't been triggered
        if (confettiRef.current) { // Check if confettiRef.current is set
          confettiRef.current.start(); //call on the start to trigger the animation
        }
        setConfettiTriggered(true); // Mark that confetti has been triggered so it doesnt continuously play again
      }
    }
  };

  //This useEffect hook ensures the confetti is triggered correctly when the page loads if the workout is already completed.
  useEffect(() => {
    if (completedReps === totalReps && !confettiTriggered) { //check if the completedReps is equal to total and confetti
      //is not triggered
      setConfettiTriggered(true); // The setConfettiTriggered updates it and if it has been triggered then it is true
    }
  }, [confettiTriggered, completedReps, totalReps]); //runs when there is changes that occur to these

  //decrement the completed reps and update the state.
  const handleUndoRep = () => { //function that will run when a rep needs to be undone.
    if (completedReps > 0) { //If the number of completed reps is greater than 0
      const newCompletedReps = completedReps - 1; //creates a newCompletedReps that is less than the current completedReps
      setCompletedReps(newCompletedReps); //call to update the completedReps

      if (newCompletedReps < totalReps && confettiTriggered) { //checks the the new completed reps is less than the total reps 
        //and confetti was triggered
        setConfettiTriggered(false); // Reset to allow confetti again
      }
    }
  };
 
  const formatTime = (time) => { //format the timer value into minutes and seconds.
    const minutes = Math.floor(time / 60); //we divide the total time by 60 and round it down to the nearest whole number to get the number of minutes.
    const seconds = time % 60; //get the remainder of the total time to get the seconds
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; //sets the format of the minute and second
    //if the second is less than 10 then add a 0 before the number.
  };

  const startTimer = () => setIsRunning(true); //start the timer by setting isRunning to true.
  const stopTimer = () => setIsRunning(false); //stop the timer by setting isRunning to false.
  const resetTimer = () => { //to stop the timer
    setIsRunning(false); //make isrunning to false
    setTimer(0); //reset the timer value to 0.
  };

  //make a container that holds everything
    //shows the name of the workout exercise
    //shows the progress bar by the completed reps out of the total
    //makes a button that when clicked completes the rep
    //The name of the button is complete rep

    //A button that handleUndoRep
    //The name is UndoRep

    //In the bottom it shows completed reps: then the completed out of the total

    //Creates a timercontainer
    //The name is Rest Timer
    //Format the timer into minutes and seconds
    //Timer Buttons
    //Start Stop Reset

    //Shows the Notes in the Workout

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.exercise}</Text> 
      <ProgressBar progress={completedReps / totalReps} />
      <TouchableOpacity
        style={[styles.button, styles.completeButton]} //
        onPress={handleCompleteRep} //
      >
        <Text style={styles.buttonText}>Complete Rep</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.undoButton]}
        onPress={handleUndoRep}
      >
        <Text style={styles.buttonText}>Undo Rep</Text>
      </TouchableOpacity>

      <Text>Completed Reps: {completedReps} / {totalReps}</Text>

      <View style={styles.timerContainer}>
      <Text style={styles.restTimer}>Rest Timer</Text>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
        <View style={styles.timerButtons}>
          <Button title="Start" onPress={startTimer} />
          <Button title="Stop" onPress={stopTimer} />
          <Button title="Reset" onPress={resetTimer} />
        </View>
      </View>

      <Text style={styles.notes}>Notes: {workout.notes}</Text>

      {confettiTriggered && ( //if confetti is Triggered
        <ConfettiCannon 
          ref={confettiRef} //confetti reference
          count={200} //200 confetti pieces will show
          origin={{x: Dimensions.get('window').width / 2, y: 0}} //Centers the origin horizontally 
          //for x and for the y it starts at the very top
          fallSpeed={3000} // fall with speed of 3000
          explosionSpeed={300} //explode with each set of 300
          fadeOut={true} //make confetti fade out after a while
        />
      )}
    </View>
  );
  
};
  ViewWorkoutScreen.navigationOptions = {
    title: 'View Workout',
    headerStyle: {
      backgroundColor: '#ffd29d', // Set the header background color to match the screen background
    },
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffd29d', // Light Purple background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Jet Black
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: '#FF6F00', // Neon Orange
  },
  undoButton: {
    backgroundColor: '#FF00FF', // Vivid Magenta
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // White text for contrast
  },
  notes: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  timerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  restTimer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Jet Black
  },
});
 
export default ViewWorkoutScreen;
