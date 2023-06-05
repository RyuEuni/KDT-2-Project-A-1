import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'


const SignupScreen: React.FC<any> = ({ navigation }) => {
  const [idText, setIdText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordCheckText, setPasswordCheckText] = useState('');
  const [nicknameText, setNicknameText] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [emailText, setEmailText] = useState('');
  // const [passwordText, setPasswordText] = useState('');

  const loginResult = () => {
    console.log("id: ", idText, " pw: ", passwordText, "Check: ", passwordCheckText, "nickname: ", nicknameText, "birthday: ", birthdayText, "email: ", emailText,);
    // Perform search logic or any other operations with the entered text
  };

  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
      <Icon name="left" size = {25} color = '#A5C7FB' style={{marginTop: '50%'}}/>
      </TouchableOpacity>

      {/* 회원가입 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.signUpTitle}>Sign Up</Text>
        <Image style={Styles.signUpImage} source={require('./resource/JamStock_Pig.png')}></Image>
      </View>
      
      {/* 회원가입 입력창 */}
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
            onChangeText={text => setPasswordCheckText(text)}
            value={passwordCheckText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Nickname</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setNicknameText(text)}
            value={nicknameText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Birthday</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setBirthdayText(text)}
            value={birthdayText}
            placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setEmailText(text)}
            value={emailText}
            placeholder=""
        />
      </View>

      {/* 회원가입 완료 버튼 */}
      <TouchableOpacity style={Styles.signUpNFindBtn} onPress={() => 
        {
          loginResult() 
          navigation.navigate('login')
        }
      }>
        <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9}}>가입 완료</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SignupScreen;