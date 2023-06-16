import React, { useState } from "react";
import { View } from "react-native"
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import { Styles } from "../style/styles";
import { MyPageMain } from '../../Models/account/mypageEdit'


export const MyPageScreen: React.FC<any> = ({ navigation }) => {
  // 전, 후 구분을 위한 useState 설정
  // 기본은 before
  const [state, Setstate] = useState('before')

  return (
    <View style={Styles.myPageBox}>
      {/* 탑 메뉴바 */}
      <TopMenu navigation={navigation} />

      {/* 본문 내용 함수 실행 함수매개변수로 state와 Setstate를 넣어 전, 후 페이지 구분 작동 */}
      {MyPageMain(state,Setstate)}

      {/* 바텀 메뉴바 */}
      <BottomMenu navigation={navigation} />
    </View>
  )
}