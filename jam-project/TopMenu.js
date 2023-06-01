import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { Styles, StylesText } from './Styles.js';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function TopMenu({navigation}) {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
        <View style={Styles.topRoot}>
          <View style={Styles.logoWrap}>
            <Text style={Styles.logoText}>JamStock</Text>
            <Image
              style={Styles.logoImage}
              source={require('./resource/JamStock_Pig.png')}
            />
          </View>
          <View style={Styles.topWrap}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Image
                  style={Styles.logoImage}
                  source={require('./resource/shoppingcart.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.hambergerWrap} onPress={() => navigation.navigate('Signup')}>
              <View style={Styles.hambergerBar}></View>
              <View style={Styles.hambergerBar}></View>
              <View style={Styles.hambergerBar}></View>
            </TouchableOpacity>
          </View>
        </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}