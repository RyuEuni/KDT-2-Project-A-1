
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesColors, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
// import afterSearch from './afterSearch';
import { text } from 'body-parser';


const SearchScreen: React.FC<any> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
    afterSearch
    setSearchText(searchText)
    
    // setSearchText('검색'); // 검색 완료 후 텍스트를 '검색'으로 설정
    // Perform search logic or any other operations with the entered text
  };

  function afterSearch() {
    // useEffect(() => {
    //   after.addEventListener('click', navigation.pop());
  
    //   // return () => {
    //   //   document.removeEventListener('mousemove', onMouseMove);
    //   // }
    // }, [])
    return (
      <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

          {/* 내가 찜한 기업 영역 */}
          <View style={Styles.myLoveCpy}>
            <Text style={{ marginTop: '5%', marginRight: '62%', fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center',}}>검색 결과 화면</Text>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>네이버</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>삼성전자</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>유한양행</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>카카오</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>포스코건설</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== search 영역 =========*/}
      <View style={Styles.homeArea}>
        <View style={{width: '100%', height:'10%', backgroundColor: StylesColors.subColorLight.backgroundColor, marginTop: '7%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '95%', height: '70%', backgroundColor: StylesColors.whiteColor.backgroundColor, borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              style={Styles.serchBar}
              onChangeText={text => setSearchText(text)}
              value={searchText}
              placeholder="검색"
            />
            <TouchableOpacity style={Styles.serchButton} onPress={handleSearch}>
              <Text style={Styles.serchButtonText}>serch</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

          {/* 내가 찜한 기업 영역 */}
          <View style={Styles.myLoveCpy}>
            <Text style={{ marginTop: '5%', marginRight: '62%', fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center',}}>내가 찜한 기업</Text>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>네이버</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>삼성전자</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>유한양행</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>카카오</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.myLoveListWrap}>
              <Image style={Styles.myLoveImage} source={require('../../Resource/Icon/heart.png')}></Image>
              <Text style={Styles.searchListText}>포스코건설</Text>
              <Text style={Styles.searchListText}>금액 표시</Text>
            </TouchableOpacity>
          </View>

          {/* 사랑받는 기업 영역 */}
          <View style={Styles.userLoveCpy}>
            <Text style={{marginTop: '5%', marginRight: '45%', fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center',}}>유저에게 사랑받는 기업</Text>
            <TouchableOpacity style={Styles.userLoveListWrap}>
              <Text style={Styles.searchListText}>1 네이버</Text>
              <Text style={Styles.searchListText}>찜 횟수 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.userLoveListWrap}>
              <Text style={Styles.searchListText}>2 삼성전자</Text>
              <Text style={Styles.searchListText}>찜 횟수 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.userLoveListWrap}>
              <Text style={Styles.searchListText}>3 아이온큐</Text>
              <Text style={Styles.searchListText}>찜 횟수 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.userLoveListWrap}>
              <Text style={Styles.searchListText}>4 카카오</Text>
              <Text style={Styles.searchListText}>찜 횟수 표시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.userLoveListWrap}>
              <Text style={Styles.searchListText}>5 CJ제일제당</Text>
              <Text style={Styles.searchListText}>찜 횟수 표시</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*========== search 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View> 
  );
};

export default SearchScreen;
