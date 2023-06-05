
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesColors, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';

const CompanyDetailBuy: React.FC<any> = ({ navigation }) => {
  
  const [buyText, setbuyText] = useState('');
  const [countText, setcountText] = useState('');

  const BuyResult = () => {
    console.log("구매액: ", buyText, "개수: ", countText);
    // Perform search logic or any other operations with the entered text
  };

  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== 기업정보 상세 영역 =========*/}
      <View style={Styles.cpyDetailBox}>
        {/* 기업 명 */}
        <View style={{width: '100%', height: '12%',}}>
          <TouchableOpacity style={Styles.companyInfo}>
            {/* <Image style={Styles.companyTitleImg} source={require('../../Resource/Icon/heart.png')}></Image> */}
            <View style={Styles.companyTitleImg}></View>
            <Text style={Styles.companyTitile}>CJ제일제당</Text>
            <Image style={Styles.companyHeartImg} source={require('../../Resource/Icon/heart.png')}></Image>
            <Text style={Styles.companyMoney}>금액 표시</Text>
          </TouchableOpacity>
        </View>

        {/* 구분 탭 */}
        <View style={Styles.companyTabWrap}>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={()=>navigation.navigate('companyDetail')}>
            <Text style={Styles.companyTabText}>정보</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={()=>navigation.navigate('companyDetailBuy')}>
            <Text style={Styles.companyTabText}>구매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>판매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn}>
            <Text style={Styles.companyTabText}>커뮤니티</Text>

          </TouchableOpacity>
        </View>

        <View style={{width: '100%', height: '100%', position: 'relative', top: '-3%', backgroundColor: StylesColors.subColorLight.backgroundColor, borderWidth: 1, borderColor: 'green',}}>
          {/* 내용 1 */}
          <View style={Styles.buyWrap}>
            <View style={Styles.buyInputWrap}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>1개당</Text>
              <TextInput
                style={{width: '30%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor,marginLeft: '3%', marginRight: '3%'}}
                onChangeText={text => setbuyText(text)}
                value={buyText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>원을</Text>
              <TextInput 
                style={{width: '25%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor, marginLeft: '3%', marginRight: '3%'}}
                onChangeText={text => setcountText(text)}
                value={countText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>개</Text>
            </View>

            <View style={{width: '95%', height: '15%', display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <TouchableOpacity style={Styles.buyButton}>
                <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center'}}>구매하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.cartButton}>
                <Image style={{width: '50%', height: '90%', resizeMode: 'contain'}} source={require('../../Resource/Icon/shoppingcart.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={Styles.buyInfo}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>현재 1개당 금액은 [      ]원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최고가는 [     ]원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최저가는 [     ]원 입니다!</Text>
            </View>
            <Image style={{width: '15%', height: '20%', resizeMode: 'contain', marginRight: '75%'}} source={require('../../Resource/Icon/JamStock_Pig2.png')}></Image>
          </View>

          {/* 내용 2 */}
          <View style={Styles.companyFinanceWrap}></View>

          {/* 내용 3 */}
          <View style={Styles.companyInterestWrap}></View>
        </View>
      </View>
      {/*========== 기업정보 상세 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View> 
  );
};

export default CompanyDetailBuy;
