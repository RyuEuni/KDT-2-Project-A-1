import React from 'react';
import {View} from 'react-native';
import { Styles } from './styles';
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';

type HomeProps = {
  navigation:any;
}

const HomeScreen:React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />
      <View style={Styles.homeWrap}>
        {/* <Button title="Login" onPress={() => navigation.navigate('Signup')} /> */}
        <View></View>
        <View></View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

export default HomeScreen

// fetch("http://localhost:3008/home", {
//     method: "POST",
//   })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log("count: ", result)

//   })