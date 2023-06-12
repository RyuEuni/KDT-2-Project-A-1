import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { response } from 'express';



const LoginScreen: React.FC<any> = ({ navigation }) => {

  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const loginResult = () => {
    // console.log("id: ", loginText, " pw: ", passwordText);

    // 아이디 비밀번호를 변수에 담는다.
    const data = {
      id: loginText,
      pw: passwordText
    }

    // 패치 시 주소는 실행하는 컴터 ip
    fetch('http://192.168.100.81:3080/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      // 입력받은 데이터를 바디에 담아서 전송
      body: JSON.stringify(data)
    }
    ).then((response) => {

      // 서버로 부터 응답을 회신받는다.
      return response.json()
    })
      .then(json => {


        // console.log("테스트중" + JSON.stringify(json))
        // console.log(typeof data)
        
        // 데이터 변수에 json화 한 값을 담는다.
        const data = JSON.stringify(json)
        
        // console.log(data.split(`"`)[3])

        if (data.split(`"`)[3] === undefined) {
          // 아이디가 없음
          Alert.alert('아이디 실패', '아이디가 일치하지 않습니다.')
        } else if (data.split(`"`)[7] !== passwordText) {
          // 비밀번호 틀림
          Alert.alert('비밀번호 실패', '비밀번호가 일치하지 않습니다.')
        } else {
          // 아이디 비번 있으니까 입장~
          // 존맛탱 주기 
          Alert.alert('환영합니다!','잼픽이와 함께 하는 JamStock에 오신 것을 환영합니다!')
          navigation.navigate('home')
        }
      }
      ).catch(() => {
        console.log('error')
      })
  };


  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
        <Icon name="left" size={25} color='#A5C7FB' style={{ marginTop: '50%' }} />
      </TouchableOpacity>
      <Text style={Styles.loginTitle}>Login</Text>
      <Image style={Styles.loginImage} source={require('../../Resource/Icon/JamStock_Pig_bukkeu.png')}></Image>

      {/* ID, PW 입력창 */}
      <View style={Styles.idPwWrap}>
        <Text style={Styles.idPwText}>ID</Text>
        <TextInput
          style={Styles.idPwInput}
          onChangeText={text => setLoginText(text)}
          value={loginText}
          placeholder="ID를 입력해 주세요"
        />
      </View>
      <View style={Styles.idPwWrap}>
        <Text style={Styles.idPwText}>PW</Text>
        <TextInput
          style={Styles.idPwInput}
          onChangeText={text => setPasswordText(text)}
          value={passwordText}
          placeholder="PW를 입력해 주세요"
        />
      </View>

      {/* 회원가입, 계정찾기, 로그인 버튼 */}
      <View style={Styles.loginPageBtnWrap}>
        <TouchableOpacity style={Styles.loginPageBtn} onPress={() => navigation.navigate('signUp')}>
          <Text style={Styles.loginPageBtnText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.loginPageBtn} onPress={() => navigation.navigate('account')}>
          <Text style={Styles.loginPageBtnText}>계정찾기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.loginPageLoginBtn} onPress={() => {
        loginResult()
      }
      }>
        <Text style={{ fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 7 }}>로그인</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;