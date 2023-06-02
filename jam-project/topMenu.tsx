import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Styles } from './styles';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// type topMenuProps = {
//   navigation: any;
//   // Replace `any` with your navigation type
// };

const TopMenu:React.FC<any>=({navigation})=> {
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
            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Image
                  style={Styles.logoImage}
                  source={require('./resource/shoppingcart.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.hambergerWrap} onPress={() => navigation.navigate('signUp')}>
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

export default TopMenu