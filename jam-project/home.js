import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './styles.js';
import TopMenu from './top-menu.js';


export default function homeScreen({navigation}) {
  // let imagePath = topMenu
  return (
    <View>
      <TopMenu />
      <Button title="Login" onPress={() => navigation.navigate('login')} />
    </View>
    
  );
}
