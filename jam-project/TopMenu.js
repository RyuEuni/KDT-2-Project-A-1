import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './Styles.js';

export default function TopMenu() {
  return (
    <View style={Styles.topRoot}>
      <View style={Styles.logoWrap}>
        <Text style={Styles.logoText}>JamStock</Text>
        <Image
          style={Styles.logoImage}
          source={require('./resource/JamStock_Pig.png')}
        />
      </View>

      <View style={Styles.topWrap}>
        <Image
            style={Styles.logoImage}
            source={require('./resource/shoppingcart.png')}
          />
        <View style={Styles.hambergerWrap}>
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
        </View>
      </View>
    </View>
    
  );
}