import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from 'react-native';
import Colours from '../constants/Colours';
import StyledComponent from '../components/StyledComponent';
import CustomButton from '../components/CustomButton';

import Stack1 from '../screens/Stack1'

//https://react-native-elements.github.io/react-native-elements/docs/overview.html
import {ThemeProvider} from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';





  
const MainScreen = props => {
    const renderListItem = (value, numOfRound) => (
        <View key={value} style={styles.listItem}>
          <Text>#{numOfRound}</Text>
          <Text>{value}</Text>
        </View>
      );
      //list items in array
    const initialList = ['1','2','3','4'];
    const [listItems, setListItems] = useState(initialList);
    return (
      /* We have added <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss() }}> to allow us to dismiss the
        soft keyboard if the user presses on anything that is not an input, we have also called the custom components
        Header providing the prop that will be passed to display within it and the StyledComponent which will wrap
        any content displayed inside it. */
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss() }}>
        <View style={styles.screen}>
          <ScrollView>
          <View>
            <Button title="Stack Navigation Button" onPress={() => {
                props.navigation.navigate('Stack2');
            }} />
            <StyledComponent>
              <Text style={{color: Colours.PrimaryText, fontFamily: 'work-sans-medium',}}>This is inside our styled component using colours from our colour file.</Text>
            </StyledComponent>
            <View style={styles.centerContent}>
              <View style={styles.imageContainer}>
                <Image
                  //Local image use require as shown below
                  // source={require('../assets/success.png')}
  
                  //Network images use uri as shown below, these also require width and height to be set in advance.
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View style={styles.centerContent}>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={() => {}}>
                  Custom Button Text
                </CustomButton>
              </View>
            </View>
            <View style={styles.centerContent}>
              <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                  {listItems.map((itemvalue, index) => renderListItem(itemvalue, index))}
                </ScrollView>
              </View>
            </View>
            
          </View>
          
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      
    );
  };
MainScreen.navigationOptions = {
    headerTitle: 'YouCurate',
    headerStyle: {
        backgroundColor: Colours.HeaderBackground
      },
      headerTintColor: Colours.HeaderText
}
  const styles = StyleSheet.create({
    screen: {
      flex: 1
    },
    centerContent:{
      justifyContent:'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: 30
    },
    image: {
      width: '100%',
      height: '100%'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 300,
      maxWidth: '80%'
    },
    listContainer: {
      flex: 1,
      width: '80%'
    },
    list: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    listItem: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    }
  });


  export default MainScreen;
  