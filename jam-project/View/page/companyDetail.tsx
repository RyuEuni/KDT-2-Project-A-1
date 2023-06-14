
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesColors, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import DetailReturn from '../../Models/func/companyDetailContent';
import changeCurrency from '../../Models/func/changeCurrency'

const CompanyDetail: React.FC<any> = ({ navigation, route }) => {

  const [activeTab, setActiveTab] = useState('info'); // 기본 탭 설정
  const { name, code } = route.params;
  const [priceText, setPriceText] = useState('');
  

  const codeObj = {
    "code": code
  }
  const fetchData = () => {
    fetch('http://192.168.100.81:5000/stock/stockPrice',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(codeObj)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPriceText(changeCurrency(json['prpr']))
      })
      .catch(error => {
        console.error('에러가 발생했습니다:', error);
      });
  };
  useEffect(()=>{
    fetchData()
  },[])


  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return (DetailReturn('info', code, name, priceText, navigation));
      case 'buy':
        return (DetailReturn('buy', code, name, priceText, navigation));
      case 'sell':
        return (DetailReturn('sell', code, name, priceText, navigation));
      case 'community':
        return (DetailReturn('community', code, name, priceText, navigation));
      default:
        return null;
    }
  };

  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== 기업정보 상세 영역 =========*/}
      <View style={Styles.cpyDetailBox}>
        {/* 기업 명 */}
        <View style={{width: '100%', height: '10%',}}>
          <View style={Styles.companyInfo}>
            <Text style={Styles.companyTitile}>{name}</Text>
            <TouchableOpacity style={{width: '10%', height: '40%',marginLeft: '1%', marginTop:'1%'}}>
              <Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/heart.png')}></Image>
            </TouchableOpacity>
            <Text style={Styles.companyMoney}>{priceText}원</Text>
          </View>
        </View>

        {/* 구분 탭 */}
        <View style={Styles.companyTabWrap}>
          <TouchableOpacity 
            style={Styles.companyTabBtn} onPress={() => setActiveTab('info')}>
            <Text style={Styles.companyTabText}>정보</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('buy')}>
            <Text style={Styles.companyTabText}>구매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('sell')}>
            <Text style={Styles.companyTabText}>판매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('community')}>
            <Text style={Styles.companyTabText}>커뮤니티</Text>

          </TouchableOpacity>
        </View>
        
        {renderContent()}
        
      </View>
      {/*========== 기업정보 상세 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View> 
  );
};

export default CompanyDetail;
