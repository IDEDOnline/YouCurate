import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack1 = props => {
  return (
    <View style={styles.screen}>
      <Text>The Stack 1 Screen!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Stack1;
