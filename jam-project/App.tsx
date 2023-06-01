import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Styles, StylesColors } from './styles';
import LoginScreen from './login';
import HomeScreen from './home';
import SignupScreen from './signUp';
import TopScreen from './topMenu'
import BottomScreen from './bottomMenu';
import WalletScreen from './wallet';
import RecommandScreen from './recommand'

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
          <Stack.Screen name="wallet" component={WalletScreen} options={{headerShown: false}}/>
          <Stack.Screen name="recommand" component={RecommandScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


