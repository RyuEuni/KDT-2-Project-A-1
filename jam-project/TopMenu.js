import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './Styles.js';

export default function TopMenu() {
  return (
    <View style={Styles.homeBox}>
      <View>
        <Text style={{fontSize: StylesText.extraLargeSize}}>JamStock</Text>
        <Image
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/JamStock_Pig.png')}
        />
      </View>
    </View>
    
  );
}