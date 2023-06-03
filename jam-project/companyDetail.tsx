
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesColors, StylesText } from './styles';
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';


const CompanyDetail: React.FC<any> = ({ navigation }) => {
  
  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== 기업정보 상세 영역 =========*/}
      <View style={Styles.cpyDetailBox}>
        {/* 기업 명 */}
        <View style={{width: '100%', height: '15%',}}>
          <TouchableOpacity style={Styles.companyInfo}>
            {/* <Image style={Styles.companyTitleImg} source={require('./resource/heart.png')}></Image> */}
            <View style={Styles.companyTitleImg}></View>
            <Text style={Styles.companyTitile}>CJ제일제당</Text>
            <Image style={Styles.companyHeartImg} source={require('./resource/heart.png')}></Image>
            <Text style={Styles.companyMoney}>금액 표시</Text>
          </TouchableOpacity>
        </View>

        {/* 구분 탭 */}
        <View style={Styles.companyTabWrap}>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>정보</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>구매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>판매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>커뮤니티</Text>

          </TouchableOpacity>
        </View>

        {/* 내용 1 */}
        <View style={Styles.companyIntroWrap}></View>

        {/* 내용 2 */}
        <View style={Styles.companyFinanceWrap}></View>

        {/* 내용 3 */}
        <View style={Styles.companyInterestWrap}></View>
      </View>
      {/*========== 기업정보 상세 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View> 
  );
};

export default CompanyDetail;
