import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './styles.js';

export default function TopMenu({navigation}) {
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