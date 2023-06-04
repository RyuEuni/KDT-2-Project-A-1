import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styles } from './styles';
import LoginScreen from './login';
import HomeScreen from './home';
import SignupScreen from './signUp';
import TopScreen from './topMenu';
import BottomScreen from './bottomMenu';
import HambergerScreen from './hamberger';
import { CartScreen } from './cart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="topMenu" component={TopScreen} />
        <Stack.Screen name="bottomMenu" component={BottomScreen} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="signUp" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="hamberger" component={HambergerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="cart" component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


