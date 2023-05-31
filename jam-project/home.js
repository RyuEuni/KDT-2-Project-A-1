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

fetch("http://localhost:3008/home", {
    method: "POST",
  })
  .then((response) => response.json())
  .then((result) => {
    console.log("count: ", result)

  })