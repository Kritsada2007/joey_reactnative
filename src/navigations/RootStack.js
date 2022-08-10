import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './../screens/Home'
import AnimateAPI from '../screens/AnimateAPI'
import AnimateType from './../screens/AnimateType';
import AnimateScrollView from './../screens/AnimateScrollView';
import Animateable from './../screens/Animateable';

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}} initialRouteName='Animateable'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimateAPI" component={AnimateAPI} />
      <Stack.Screen name="AnimateType" component={AnimateType} />
      <Stack.Screen name="AnimateScrollView" component={AnimateScrollView} />
      <Stack.Screen name="Animateable" component={Animateable} />
    </Stack.Navigator>
  )
}

export default RootStack