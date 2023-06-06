import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import SignUpCheck from '../../Models/func/signUpCheck';


// const signUpDbSave = (idText:string, passwordText:string, nicknameText:string, birthdayText:string, emailText:string) => {

//   const signUpObj = {
//     id: idText,
//     password: passwordText,
//     nickname: nicknameText,
//     birthday: birthdayText,
//     email: emailText,
//   }

//   useEffect(() => {
//     fetch('http://172.30.1.55:3000/signUp',
//     {
//       method: "POST",
//       body: JSON.stringify(signUpObj),
//     })
//     .then(response => response.json())
//     .catch(error => {
//       console.error('회원가입 에러가 발생했습니다::: ', error);
//     });
//   }, []);
// }

const SignupScreen: React.FC<any> = ({ navigation }) => {
  const [idText, setIdText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordCheckText, setPasswordCheckText] = useState('');
  const [nicknameText, setNicknameText] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [emailText, setEmailText] = useState('');
  // const [passwordText, setPasswordText] = useState('');

  const [idValidation, setIdValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [passwordValidation, setPasswordValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [passwordCheckValidation, setPasswordCheckValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [nicknameValidation, setNicknameValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [birthdayValidation, setBirthdayValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [emailValidation, setEmailValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');

  const SignUpResult = () => {
    console.log("id: ", idText, " pw: ", passwordText, "Check: ", passwordCheckText, "nickname: ", nicknameText, "birthday: ", birthdayText, "email: ", emailText);

    // const signUpCheckResult = SignUpCheck();
    // console.log("회원가입 결과 값: ", signUpCheckResult)

    // return signUpCheckResult;
  };

  // const pattern = /^[a-z0-9]+$/i; //영어 소문자와 숫자 형식 정규식
  const pattern = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/i
  const patternNincName = /^[a-zㄱ-ㅎㅏ-ㅣ가-힣]+$/i; //영어 소문자와 한글 형식 정규식
  const patternBirthday = /^\d{4}\d{2}\d{2}$/; // 생년월일 형식 정규식 (YYYY-MM-DD)
  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //이메일 형식 정규식 (abc123@gmail.com)
  
  const inputLength ={
    idcharLength: {min: 1, max: 10},
    pwcharLength: {min: 1, max: 15},
    nicknameLength: {min: 2, max: 10},
  }

  let id:boolean = false;
  let pw:boolean = false;
  let pwCk:boolean = false;
  let nick:boolean = false;
  let brt:boolean = false;
  let em:boolean = false;

  
  const IdChecking = () => {

    //! 아이디 유효성 검사
      if(idText.length >= inputLength.nicknameLength.min && idText.length <= inputLength.nicknameLength.max){
        const result = pattern.test(idText);

        if(result){
          setIdValidation('유효한 값입니다.')
          id = true;
        }
        else{
          setIdValidation('입력하신 ID의 값이 형식에 맞지 않습니다.')
        }
      }
      else{
        setIdValidation('입력하신 ID의 길이가 유효하지 않습니다.')
    
      }
    
  };
  const pwChecking = () => {
      if(passwordText.length >= inputLength.pwcharLength.min && passwordText.length <= inputLength.pwcharLength.max){
        const result = pattern.test(passwordText);

        if(result){
          setPasswordValidation('유효한 값입니다.')
          pw = true;
        }
        else{
          setPasswordValidation('입력하신 password의 값이 형식에 맞지 않습니다.')
        }
      }
      else{
        setPasswordValidation('입력하신 password의 길이가 유효하지 않습니다.')
    
      }

  };
  const rePwChecking = () => {
    if(passwordCheckText == passwordText){
      setPasswordCheckValidation('password와 동일합니다.')
      pwCk = true;
    }
    else{
      setPasswordCheckValidation('입력하신 값과 password가 동일하지 않습니다.')
  
    }

  };
  const nickNameChecking = () => {
      if(nicknameText.length >= inputLength.nicknameLength.min && nicknameText.length <= inputLength.nicknameLength.max){
        const result = patternNincName.test(nicknameText);

        if(result){
          setNicknameValidation('유효한 값입니다.')
          nick = true;
        }
        else{
          setNicknameValidation('입력하신 nickname의 값이 형식에 맞지 않습니다.')
        }
      }
      else{
        setNicknameValidation('입력하신 nickname의 길이가 유효하지 않습니다.')
    
      }

  };
  const birthdayChecking = () => {
    if(patternBirthday.test(birthdayText)){
  
      // 생년월일 유효성 검사 (예: 2023-06-05인 경우 2023년 6월 5일이 있는지 확인)
      const year = parseInt(birthdayText.slice(0, 4), 10);
      const month = parseInt(birthdayText.slice(4, 6), 10);
      const day = parseInt(birthdayText.slice(6, 8), 10);
      const date = new Date(year, month - 1, day);
      console.log("aaaa: ", date)
  
      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        // 생년월일이 유효하지 않을 경우
        setBirthdayValidation('입력하신 birthday의 값이 존재하지 않는 날짜입니다.')
      }
      else{
        setBirthdayValidation('유효한 값입니다.')
        brt = true;

      }
    }
    else{
      setBirthdayValidation('입력하신 birthday의 값이 형식과 맞지 않습니다.')
    }

  };
  const emailChecking = () => {
    const result = patternEmail.test(emailText);
    if(result){
      setEmailValidation('유효한 값입니다.')
      em = true;

    }
    else{
      setEmailValidation('입력하신 email값이 형식에 맞지 않습니다.')
    }

  };
  
  const checking = () => {
    // console.log("dddd: ", id , pw , pwCk , nick , brt , em)

    if(id && pw && pwCk && nick && brt && em){
      // signUpDbSave(idText, passwordText, nicknameText, birthdayText, emailText)

      return true;
    }
    else{
      return false;
    }

  }

  const signUpObj = {
    id: idText,
    password: passwordText,
    nickname: nicknameText,
    birthday: birthdayText,
    email: emailText,
  }

  useEffect(() => {
    fetch('http://localhost:3000/signUp',
    {
      method: "POST",
      body: JSON.stringify(signUpObj),
    })
    .then(response => response.json())
    .catch(error => {
      console.error('회원가입 에러가 발생했습니다::: ', error);
    });
  }, []);

  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
      <Icon name="left" size = {25} color = '#A5C7FB' style={{marginTop: '50%'}}/>
      </TouchableOpacity>

      {/* 회원가입 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.signUpTitle}>Sign Up</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>
      
      {/* 회원가입 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>ID</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setIdText(text)}
            value={idText}
            onSubmitEditing={IdChecking}
            keyboardType="visible-password"
            placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{idValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            onSubmitEditing={pwChecking}
            keyboardType="visible-password"
            placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{passwordValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password check</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setPasswordCheckText(text)}
            value={passwordCheckText}
            onSubmitEditing={rePwChecking}
            keyboardType="visible-password"
            placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{passwordCheckValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Nickname</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setNicknameText(text)}
            value={nicknameText}
            onSubmitEditing={nickNameChecking}
            keyboardType="visible-password"
            placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{nicknameValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Birthday</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setBirthdayText(text)}
            value={birthdayText}
            onSubmitEditing={birthdayChecking}
            placeholder=""
            keyboardType="numeric"
            maxLength={8}
        />
      </View>
      <Text style={Styles.signUpValidation}>{birthdayValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
            style={Styles.signUpInput}
            onChangeText={text => setEmailText(text)}
            value={emailText}
            onSubmitEditing={emailChecking}
            keyboardType="visible-password"
            placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{emailValidation}</Text>


      {/* 회원가입 완료 버튼 */}
      <TouchableOpacity style={Styles.signUpNFindBtn} onPress={() => 
        {
          // if(id && pw && pwCk && nick && brt && em){

          //   useEffect(() => {
          //     fetch('http://172.30.1.55:3000/signUp',
          //     {
          //       method: "POST",
          //       body: JSON.stringify(signUpObj),
          //     })
          //     .then(response => response.json())
          //     .catch(error => {
          //       console.error('회원가입 에러가 발생했습니다::: ', error);
          //     });
          //   }, []);
          // }
          // signUpDbSave(idText, passwordText, nicknameText, birthdayText, emailText)
          if(checking()){
            navigation.navigate('login')
          }
          
        }
      }>
        <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9}}>가입 완료</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SignupScreen;