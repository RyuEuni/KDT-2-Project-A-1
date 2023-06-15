import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../../View/style/styles';
import { removeLogin } from '../../Utils/Storage/loginStorage';

// 햄버거 상단부 부분
export const hambergerTop=(state:boolean, navigation:any, nickname:string)=>{
  if(state){
    return (
      // 로그인 전
    <View style={Styles.hamTop}>
        <TouchableOpacity style={Styles.hamButton} disabled={!state} onPress={() => navigation.navigate('signUp')}>
          <Text style={Styles.hamButtonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.hamButton} disabled={!state} onPress={() => navigation.navigate('login')}>
          <Text style={Styles.hamButtonText}>로그인</Text>
        </TouchableOpacity>
      </View>
      )
  }else{
    // 로그인 후
    return (
      <View style={Styles.hamTop}>
          <Text style={Styles.hamName}>{nickname}님</Text>
          <TouchableOpacity style={Styles.hamButton} disabled={state} onPress={()=>{
            removeLogin()
          }}>
            <Text style={Styles.hamButtonText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        )
  }
}