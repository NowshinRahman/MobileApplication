import React, { useContext } from 'react'; //This imports React and useContext that helps us use context in our component.
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; //imports components from React Native
import { MaterialIcons } from '@expo/vector-icons'; //imports MaterialIcons set, which provides icons we can use in the app.
import { Context as WorkoutContext } from '../context/WorkoutContext'; //This imports the context we use to manage 
//workout data across the app. I used an "as" to specify the context

const IndexWorkoutScreen = ({ navigation }) => { //This defines the IndexWorkoutScreen component. 
  //It takes navigation as a prop, which allows it to navigate between different screens in the app.
  const { state, deleteWorkout } = useContext(WorkoutContext); //This uses the useContext hook to get the current state 
  //which are the list of workouts and the deleteWorkout function from the WorkoutContext.

  //This displays a scrollable list of items using the state data. The keyExtractor function converts each workout's id to a string, which is needed for React keys.
  //For each item in the list, render a TouchableOpacity (a touchable button) that navigates to the view screen for that workout when pressed.
  //Displays the exercise name with the styles.exercise style.
  //A TouchableOpacity that navigates to the edit screen for the workout when pressed. It contains an edit icon from MaterialIcons.
  //A TouchableOpacity that deletes the workout when pressed. It contains a delete icon from MaterialIcons.
  return (
    <View style={styles.container}>
      <FlatList
        data={state} 
        keyExtractor={(workout) => workout.id.toString()}
        renderItem={({ item }) => {
          const totalReps = item.sets * item.reps;
          let status;
          if (item.completedReps === 0) {
            status = "*let's start";
          } else if (item.completedReps < totalReps) {
            status = "*in-progress";
          } else {
            status = "*completed";
          }


          //The Touchable Opacity makes it clickable and when it's clicked it goes to pass
          //the workout item.id to the View Screen
            //styles the row layout
              //styles.exercise put the styles to the text of the exercise name which is the item.exercise 
            //the statusContainer shows the current status and dispalys the remaining set
              //Calculates the remaining set by subtracting the completed reps from the total rep.
              //Math.floor(item.completedReps / item.reps) basically means you divide the reps from the completed rep and then use floor to round down.
              //If completed rep is 17 and there are 10 reps for each set, it's going to be 17/10= 1.7 ~ 1
              //Then say the item.set is 4, you subtract the completed sets from the total and you get 4-1=3 sets remaining
            //The edit icon is clickable, when users click on it, it takes them to the Edit page with that specific workout id
            //The delete icon is shown, when users click on it, it calls deleteWorkout function to remove it by the id
            //I made the deleteWorkout function in the WorkoutContext page
          return (
            <TouchableOpacity onPress={() => navigation.navigate('View', { id: item.id })}>
              <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.exercise}>{item.exercise}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.status}>{status}</Text>
                  <Text style={styles.remainingSets}>Remaining Sets: {item.sets - Math.floor(item.completedReps / item.reps)}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: item.id })}>
                    <MaterialIcons name="edit" size={24} color="#FF6F00" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteWorkout(item.id)}>
                    <MaterialIcons name="delete" size={24} color="#FF00FF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

//Adds a button to the top right of the header that navigates to the create workout screen. It contains an add icon from MaterialIcons.
IndexWorkoutScreen.navigationOptions = ({ navigation }) => { //Similar to above, we use a navigation prop to move it across different screens
  return {
    title: 'Exercise Goal', //This is the top header title
    headerStyle: {
      backgroundColor: '#ffd29d', 
    },
    //Creates an object to the right of the header
      //The object is clickable, then it navigates to the Create Page, adds margin of 15 to the right
      //We add an add icon 
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ marginRight: 15 }}> 
        <MaterialIcons name="add" size={30} color="#FF6F00" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd29d', // Muted green background
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000', // Jet Black
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, // Increased padding to make the row bigger
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
    backgroundColor: '#FFFFFF', // White for each row
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  exercise: {
    fontSize: 18,
    color: '#000000', // Jet Black for exercise name
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center', // Center the status text horizontally
  },
  status: {
    fontSize: 14,
    color: '#FF6F00', // Neon Orange
  },
  remainingSets: {
    fontSize: 14,
    color: '#000000', // Jet Black for remaining sets text
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default IndexWorkoutScreen;
