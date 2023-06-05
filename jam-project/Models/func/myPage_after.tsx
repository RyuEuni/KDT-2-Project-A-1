import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";
import { Styles, StylesText } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { MyPageMain } from "./mypageEdit";


export const MyPageScreen: React.FC<any> = ({ navigation }) => {
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex:1}}>
      <View style={Styles.myPageBox}>
        <TopMenu />

        <View style={Styles.myPageMain}>
          <View style={Styles.myPagePhoto}>
            <View style={Styles.myPagePhotoView}>
              <Image style={{ width: "58%", height: "55%" }} source={require('./resource/JamStock_Pig.png')} />
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
            <TouchableOpacity style={Styles.myPageEditDone}>
              <Text style={{ fontSize: StylesText.sizeMedium.fontSize }}>완료</Text>
            </TouchableOpacity>
          </View>
        </View>

        <BottomMenu />

      </View>
    // </KeyboardAvoidingView>
  )
}