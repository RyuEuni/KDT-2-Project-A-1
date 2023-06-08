import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Styles, StylesText } from '../style/styles';


const BottomMenu: React.FC<any> = ({ navigation }) => {
  return (
    <View style={Styles.bottomBox}>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('realtime')}
        >
          <Image
            source={require('../../Resource/Icon/realtime.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>실시간</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('recommand')}
        >
          <Image
            source={require('../../Resource/Icon/recommand.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>주식 추천</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('search')}
        >
          <Image
            source={require('../../Resource/Icon/search.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('guide')}
        >
          <Image
            source={require('../../Resource/Icon/guide.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>가이드</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('wallet')}
        >
          <Image
            source={require('../../Resource/Icon/wallet.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>지갑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomMenu;