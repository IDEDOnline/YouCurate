import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack2 = props => {
  return (
    <View style={styles.screen}>
      <Text>The Stack 2 Screen!</Text>
      <Button title="Stack Navigation Button" onPress={() => {
          props.navigation.navigate({routeName: 'Stack2'});
      }} />
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

export default Stack2;
