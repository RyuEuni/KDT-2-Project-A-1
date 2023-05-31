import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Styles } from './Styles.js';
import loginScreen from './Login';
import homeScreen from './Home';
import singupScreen from './Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="jamStock" component={homeScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name="home" component={homeScreen} /> */}
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="Signup" component={singupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


