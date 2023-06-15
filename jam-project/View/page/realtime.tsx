import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Styles, StylesText, StylesColors } from "../style/styles";
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import Icon from "react-native-vector-icons/AntDesign";
import realtimeContent from "../../Models/func/realtimedata";
import { getLoginInfo } from '../../Utils/Storage/loginStorage';


let upColor = StylesColors.mainColor.backgroundColor
let downColor = StylesColors.subColorLight.backgroundColor
let vlmColor = StylesColors.subColorLight.backgroundColor
let trdColor = StylesColors.subColorLight.backgroundColor

export const RealtimeScreen: React.FC<any> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('up'); // 기본 탭 설정
  
  const renderContent = () => {
    switch (activeTab) {
      case 'up':
        console.log('up')
        
        return (realtimeContent({navigation}, 'up'))
      case 'down':
        console.log('down')
        return (realtimeContent({navigation}, 'down'))
        
      case 'TopVlm':
        console.log('TopVlm')
        
        return (realtimeContent({navigation}, 'TopVlm'))
        
      case 'TopTrd':
        console.log('TopTrd')
        
        return (realtimeContent({navigation}, 'TopTrd'))
        
      default:
        return null;
    }
  };

  getLoginInfo()
  return (
    <View style={Styles.rankingBox}>
      <TopMenu navigation={navigation} />

      {/* 메인 부분 */}
      <View style={Styles.ranking}>

        {/* 랭킹 카테고리 */}
        <View style={Styles.rankingMenu}>
          <TouchableOpacity style={[Styles.rankingMenuButton, {backgroundColor: upColor}]} onPress={()=> {
              setActiveTab('up')
              upColor = StylesColors.mainColor.backgroundColor
              downColor = StylesColors.subColorLight.backgroundColor
              vlmColor = StylesColors.subColorLight.backgroundColor
              trdColor = StylesColors.subColorLight.backgroundColor
            }}>
            <Text style={{fontWeight: StylesText.weightBold.fontWeight}}>상승</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.rankingMenuButton, {backgroundColor: downColor}]} onPress={()=> {
              setActiveTab('down')
              upColor = StylesColors.subColorLight.backgroundColor
              downColor = StylesColors.mainColor.backgroundColor
              vlmColor = StylesColors.subColorLight.backgroundColor
              trdColor = StylesColors.subColorLight.backgroundColor
            }}>
            <Text style={{fontWeight: StylesText.weightBold.fontWeight}}>하락</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.rankingMenuButton, {backgroundColor: vlmColor}]} onPress={()=> {
              setActiveTab('TopVlm')
              upColor = StylesColors.subColorLight.backgroundColor
              downColor = StylesColors.subColorLight.backgroundColor
              vlmColor = StylesColors.mainColor.backgroundColor
              trdColor = StylesColors.subColorLight.backgroundColor
            }}>
            <Text style={{fontWeight: StylesText.weightBold.fontWeight}}>거래량</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.rankingMenuButton, {backgroundColor: trdColor}]} onPress={()=> {
              setActiveTab('TopTrd')
              upColor = StylesColors.subColorLight.backgroundColor
              downColor = StylesColors.subColorLight.backgroundColor
              vlmColor = StylesColors.subColorLight.backgroundColor
              trdColor = StylesColors.mainColor.backgroundColor
            }}>
            <Text style={{fontWeight: StylesText.weightBold.fontWeight}}>총 거래대금</Text>
          </TouchableOpacity>
        </View>

        {/* 랭킹 목록 */}
        <View style={Styles.rankingList}>

          {/* <View style={[Styles.rankingMenu, {marginLeft: '5%'}]}>
            <Text>
              {new Date().getHours()}시 {new Date().getMinutes()}분 기준
            </Text>

            새로고침 되는 기능 필요
            <TouchableOpacity style={{marginLeft: '2%', marginTop: '0.7%'}}>
              <Icon name="reload1" size={13} />
            </TouchableOpacity>

          </View> */}
          {renderContent()}
        </View>

      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}