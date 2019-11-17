import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Colours from './constants/Colours';
import StyledComponent from './components/StyledComponent';
import CustomButton from './components/CustomButton';

import Stack1 from './screens/Stack1'
import StackNavigator from './navigation/StackNavigator'

//https://react-native-elements.github.io/react-native-elements/docs/overview.html
import {ThemeProvider} from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

/*function to load required data in this case a custom font for use in the resulting render,
 function is async so we can await the load to complete */
const fetchFonts = async() => {
   await Font.loadAsync({
    'work-sans-medium': require('./assets/fonts/WorkSans-Medium.ttf'),
  });
  console.log('Font load called');
};


export default function App() {
  //To check for data required prior to app start we will use AppLoading to await the return of the promise for all data required.
  //Status of the load as a var
  const [dataLoaded, setDataLoaded] = useState(false);

  //If statement to check if all data within has been loaded by the app
  if (!dataLoaded) {
    console.log('Data load called');
    return (
      //function that hold the app until data loads using the contained function.
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)} 
      />
    );
  }
  return <StackNavigator />
  
}


