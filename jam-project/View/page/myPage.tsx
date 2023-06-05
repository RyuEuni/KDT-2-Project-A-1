import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native"
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import { Styles } from "../style/styles";
import Icon from "react-native-vector-icons/AntDesign";


export const MyPageScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={Styles.myPageBox}>

      <TopMenu navigation={navigation} />

      <View style={Styles.myPagePhoto}>
        <View style={Styles.myPagePhotoView}>
          <Image style={{ width: "60%", height: "65%" }} source={require('../../Resource/Icon/JamStock_Pig.png')} />
        </View>

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
        <Text style={Styles.myPageTitleBig}>{"\n"}알림 설정</Text>
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
        <TouchableOpacity style={Styles.myPageEdit}>
          <Text>수정하기</Text>
        </TouchableOpacity>
      </View>

      <BottomMenu navigation={navigation} />

    </View>
  )
}