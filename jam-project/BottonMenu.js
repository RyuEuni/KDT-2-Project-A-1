import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText } from './Styles.js';

export default function bottomMenu() {
  return (
    <View style={Styles.bottonBox}>
      <View style={{height:'100%', width:'20%'}}>
        <Button
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/realtime.png')}
        />
        <text>실시간</text>
      </View>
      <View style={{height:'100%', width:'20%'}}>
        <Button
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/recommand.png')}
        />
        <text>주식 추천</text>
      </View>
      <View style={{height:'100%', width:'20%'}}>
        <Button
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/search.png')}
        />
        <text>검색</text>
      </View>
      <View style={{height:'100%', width:'20%'}}>
        <Button
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/guide.png')}
        />
        <text>가이드</text>
      </View>
      <View style={{height:'100%', width:'20%'}}>
        <Button
          style={{height: 50, width: 50, marginLeft: '30%', marginTop: -5}}
          source={require('./resource/wallet.png')}
        />
        <text>지갑</text>
      </View>
    </View>
    
  );
}