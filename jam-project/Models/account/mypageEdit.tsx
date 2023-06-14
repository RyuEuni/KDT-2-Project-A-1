import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native"
import { Styles, StylesText } from "../../View/style/styles";
import Icon from "react-native-vector-icons/AntDesign";
import { getLoginInfo } from "../../Utils/Storage/loginStorage";

let name = ''
export const MyPageMain = (state: string, Setstate: any) => {

  const [nickname, setNickname] = useState('')

  useEffect(() => {
    const checkLogin = async () => {
      const loginCheck = await getLoginInfo();
      console.log("여긴 마이페이지야", loginCheck)
      setNickname(`${loginCheck}`)
    };
    checkLogin();
  }, []);

  fetch('http://192.168.12.52:3080/myPage',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(nickname)
  })
  .then(response=>response.json())
  .then(data=>{
    console.log('뭐 오긴하니?',data)
  }).catch(err=>{
    console.error('망했다?', err)
  })

  if (state === 'before') {

    return (
      <View style={Styles.myPageMain}>
        <View style={Styles.myPagePhoto}>
          <View style={Styles.myPagePhotoView}>
            <Image style={{ width: "60%", height: "60%" }} source={require('../../Resource/Icon/JamStock_Pig.png')} />
          </View>
          {/* 생각해보면 수정 들어가야 +가 보이는 거 아닌가..?! */}
          <TouchableOpacity style={Styles.myPagePhotoAdd}>
            <Icon name={'plus'} style={{ fontSize: 20 }} />
          </TouchableOpacity>

        </View>

        <View style={Styles.myPageInfoBox}>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>닉네임:</Text>
            <Text style={Styles.myPageText}>아카이로 류</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>생  일:</Text>
            <Text style={Styles.myPageText}>2002년 11월 01일</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>이메일:</Text>
            <Text style={Styles.myPageText}>Ryuwyvern0972@gmail.com
            </Text>
          </View>
        </View>

        <View style={Styles.myPageAlarm}>
          <Text style={Styles.myPageTitleBig}>알림 설정</Text>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitle}>수익 발생율:</Text>
            <Text style={Styles.myPageText}>5  %</Text>
          </View>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitle}>손실 발생율:</Text>
            <Text style={Styles.myPageText}>5  %</Text>
          </View>
        </View>

        <View style={Styles.myPageEdits}>
          <TouchableOpacity
            style={Styles.myPageEdit}
            onPress={() => { Setstate('after') }}
          >
            <Text style={{ fontSize: StylesText.sizeMedium.fontSize }}>수정하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if (state === 'after') {
    return (
      <View style={Styles.myPageMain}>
        <View style={Styles.myPagePhoto}>
          <View style={Styles.myPagePhotoView}>
            <Image style={{ width: "60%", height: "60%" }} source={require('../../Resource/Icon/JamStock_Pig.png')} />
          </View>

          <TouchableOpacity style={Styles.myPagePhotoAdd}>
            <Icon name={'plus'} style={{ fontSize: 20 }} />
          </TouchableOpacity>

        </View>

        <View style={Styles.myPageInfoBox}>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>닉네임:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>생  일:</Text>
            <Text style={Styles.myPageText}>2002년 11월 01일</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>이메일:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
        </View>

        <View style={Styles.myPageAlarmEdit}>
          <Text style={Styles.myPageTitleBig}>알림 설정</Text>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitleEdit}>수익 발생율:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitleEdit}>손실 발생율:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
        </View>

        <View style={Styles.myPagePasswordEdit}>
          <Text style={Styles.myPageTitleBigEdit}>비밀번호 재설정</Text>
          <View style={Styles.myPagePasswordText}>
            <Text style={Styles.myPageTitleEdit}>신규 비밀번호:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
          <View style={Styles.myPagePasswordText}>
            <Text style={Styles.myPageTitleEdit}>비밀번호 확인:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
        </View>

        <View style={Styles.myPageEditing}>
          <TouchableOpacity style={Styles.myPageEditDone} onPress={() => { Setstate('before') }}>
            <Text style={{ fontSize: StylesText.sizeMedium.fontSize }}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}