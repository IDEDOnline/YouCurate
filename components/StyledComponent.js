import React from 'react';
import { View, StyleSheet } from 'react-native'
import Colours from '../constants/Colours'

/*More complex than our basic header component this custom component has functionality to allow the styles
 to be replaced by those passed from the calling function and also receives content placed within its tags
  from the calling function allowing it to be wrapped around other components or input while still having
   its default look specified by the component itself */
const StyledComponent = props => {
    return(
        <View {...props} style={{ ...styles.styledComponent, ...props.style }}>{props.children}</View>
    )
};
const styles = StyleSheet.create({
    styledComponent:{
        backgroundColor: Colours.PrimaryBackgroud,
        padding: 10,
        margin:15,
        borderWidth:2,
        borderRadius: 10,
        borderColor: Colours.PrimaryBorder,
        shadowColor: Colours.PrimaryShadow,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        elevation: 10,
    }
})
export default StyledComponent;