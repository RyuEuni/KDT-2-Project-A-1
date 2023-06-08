import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { findID } from '../../Models/func/findID';


const FindAccountScreen: React.FC<any> = ({ navigation }) => {
  const [idText, setIdText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordCheckText, setPasswordCheckText] = useState('');
  const [nicknameText, setNicknameText] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [emailText, setEmailText] = useState('');



  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
      <Icon name="left" size = {25} color = '#A5C7FB' style={{marginTop: '50%'}}/>
      </TouchableOpacity>

      {/* ID찾기 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.accountTitle}>아이디를 찾으시나요?</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>
      
      {/* 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setEmailText(text)}
            value={emailText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Birthday</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            placeholder=""
        />
      </View>

      {/* 아이디 찾기 버튼 */}
      <TouchableOpacity style={Styles.accountBtn} onPress={() => 
        {
          // 아이디 찾기 버튼을 클릭하면 값이 DB로 전송 및 DB에서 데이터 받아서 검증 로직

        }
      }>
        <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9}}>아이디 찾기</Text>
      </TouchableOpacity>

      
      {/* PW찾기 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.accountTitle}>비밀번호를 잊으셨나요?</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>
      
      {/* 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>ID</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setIdText(text)}
            value={idText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password check</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            placeholder=""
        />
      </View>

      {/* 비밀번호 재설정 버튼 */}
      <TouchableOpacity style={Styles.accountBtn} onPress={() => 
        {
          loginResult() 
          navigation.navigate('login')
        }
      }>
        <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9}}>비밀번호 재설정</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default FindAccountScreen;