import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexWorkoutScreen from './src/screens/IndexWorkoutScreen';
import ViewWorkoutScreen from './src/screens/ViewWorkoutScreen';
import CreateWorkoutScreen from './src/screens/CreateWorkoutScreen';
import EditWorkoutScreen from './src/screens/EditWorkoutScreen';
import { Provider as WorkoutProvider } from './src/context/WorkoutContext';

const navigator = createStackNavigator( //create a navigator with the screens from app
  {
    Index: IndexWorkoutScreen,
    View: ViewWorkoutScreen,
    Create: {
      screen: CreateWorkoutScreen,
      navigationOptions: {// no title
        title: null,
      },
    }, 
    Edit: EditWorkoutScreen,
  },
  {
    initialRouteName: 'Index', //default screen
    defaultNavigationOptions: { //default title
      title: 'Workout Log',
    },
  }
);

const App = createAppContainer(navigator); //allows the use of navigation

//app is returned in a workoutprovider, which provides the context of the entire app
export default () => {
  return (
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
  );
};
