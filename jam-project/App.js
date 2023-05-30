import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styles } from './styles.js';
import loginScreen from './login';
import homeScreen from './home';
import singupScreen from './singup';

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


