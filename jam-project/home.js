import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './Styles.js';
import TopMenu from './TopMenu';


export default function homeScreen({navigation}) {
  // let imagePath = topMenu
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Signup')} />
      <TopMenu />
    </View>
    
  );
}
