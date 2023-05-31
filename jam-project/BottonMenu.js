import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Styles, StylesText } from './Styles.js';

export default function BottomMenu() {
  return (
    <View style={Styles.bottonBox}>
      <View style={{ height: '100%', width: '20%', display: 'flex', alignItems: 'center' }}>
        {/* 버튼은 이미지를 넣을 수 없어서 사진을 포함한 버튼기능인 TouchableOpacity을 사용. */}
        <TouchableOpacity style={{ height: '70%', width: '80%' }}>
          <Image
            source={require('./resource/realtime.png')}
            style={{ height: '100%', width: '100%' }}
          />
        </TouchableOpacity>
        <Text>실시간</Text>
      </View>
      <View style={{ height: '100%', width: '20%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: '70%', width: '80%' }}>
          <Image
            source={require('./resource/recommand.png')}
            style={{ height: '100%', width: '100%' }}
          />
        </TouchableOpacity>
        <Text>주식 추천</Text>
      </View>
      <View style={{ height: '100%', width: '20%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: '70%', width: '80%' }}>
          <Image
            source={require('./resource/search.png')}
            style={{ height: '100%', width: '100%' }}
          />
        </TouchableOpacity>
        <Text>검색</Text>
      </View>
      <View style={{ height: '100%', width: '20%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: '70%', width: '80%' }}>
          <Image
            source={require('./resource/guide.png')}
            style={{ height: '100%', width: '100%' }}
          />
        </TouchableOpacity>
        <Text>가이드</Text>
      </View>
      <View style={{ height: '100%', width: '20%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: '60%', width: '80%' }}>
          <Image
            source={require('./resource/wallet.png')}
            style={{ height: '100%', width: '100%' }}
          />
        </TouchableOpacity>
        <Text>지갑</Text>
      </View>
    </View>
  );
}