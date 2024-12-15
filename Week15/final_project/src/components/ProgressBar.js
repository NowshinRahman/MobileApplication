import React from 'react'; ; // Import React to create a functional component
import { View, Text, StyleSheet } from 'react-native'; // Import components from React Native
import * as Progress from 'react-native-progress';  // Import the Progress library for creating the progress bar

const ProgressBar = ({ progress = 0 }) => { //component with a default progress value of 0
  const validProgress = Math.min(Math.max(progress, 0), 1); // Ensure the progress value is between 0 and 1, 
  //if it is below 0 then it will be set to 0 and if it's above 1 then it will be 1 
  //console.log('Progress value:', validProgress);  // Log the progress value for debugging purposes
  
  return (
    <View style={styles.container}> 
      <Text style={styles.label}>The Final Stretch</Text>
      <Progress.Circle progress={validProgress} size={120} showsText color={'#FF00FF'} />
    </View>
    //This shows what the format would look like and it's in a container
    //It would add a text that said Final Stretch
    //Circular Progress Bar has a size of 120 and shows a magenta color
  );
};

const styles = StyleSheet.create({ //This is the stylesheet
  container: { //It centers the children (Text and Progress.Circle)and a margin of 10
    alignItems: 'center',
    margin: 10,
  },
  label: { //text size 18 and margin 5 below the text
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ProgressBar; //exports it, so it can be called upon by other parts of the app
