import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Styles, StylesColors } from './styles.js';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import SignupScreen from './signUp.js';
import TopScreen from './topMenu.js'
import BottomScreen from './bottomMenu.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="topMenu" component={TopScreen} />
          <Stack.Screen name="bottomMenu" component={BottomScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


