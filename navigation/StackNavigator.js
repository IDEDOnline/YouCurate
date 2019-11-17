import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen'
import StackScreen from '../screens/Stack1';
import StackScreen2 from '../screens/Stack2';

const StackNavigator = createStackNavigator({
    //Main App
    Main: MainScreen,
    //Basic screen
    Stack1: StackScreen,
    //Screen with config
    Stack2: {screen: StackScreen2}
})

export default createAppContainer(StackNavigator);