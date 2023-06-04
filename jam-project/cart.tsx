import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Styles, StylesText } from './styles';
import Icon from 'react-native-vector-icons/EvilIcons'
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';

export const CartScreen: React.FC<any> = ({ navigation }) => {

  let buyList = [
    {
      company: "삼성전자",
      ea: 10,
      price: 1300000
    },
    {
      company: "CJ제일제당",
      ea: 10,
      price: 1300000
    },
    {
      company: "삼표시멘트",
      ea: 10,
      price: 1300000
    }
  ]

  let sellList = [
    {
      company: "SK하이닉스",
      ea: 10,
      price: 1300000
    },
    {
      company: "현대차",
      ea: 10,
      price: 1300000
    },
    {
      company: "대한항공",
      ea: 10,
      price: 1300000
    }
  ]



  return (
    <View style={Styles.cartBox}>
      <TopMenu navigation={navigation} />

      {/* 구매 장바구니 */}
      <View style={Styles.cartBuy}>
        <View style={Styles.cartTitle}>
          <Text style={Styles.cartTitleText}>구매 목록</Text>
          <TouchableOpacity style={Styles.cartchoose}>
            <Icon name="check" size={22} />
            <Text>전체 선택</Text>
          </TouchableOpacity>
        </View>

        {/* 구입 리스트 출력 */}
        <View style={Styles.cartBuyList}>

        </View>

        <View style={Styles.cartButton}>
          <TouchableOpacity style={Styles.cartButtonBox}>
            <Text>한번에 구매하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 판매 장바구니 */}
      <View style={Styles.cartSell}>
        <View style={Styles.cartTitle}>
          <Text style={Styles.cartTitleText}>판매 목록</Text>
          <TouchableOpacity style={Styles.cartchoose}>
            <Icon name="check" size={22} />
            <Text>전체 선택</Text>
          </TouchableOpacity>
        </View>

        {/* 판매 리스트 출력 */}
        <View style={Styles.cartSellList}>
          {/* 리스트 */}
          {/* 구분선 */}
          {/* 구매가능금액 */}
          {/* 합계 */}
        </View>
        <View style={Styles.cartButton}>
          <TouchableOpacity style={Styles.cartButtonBox}>
            <Text>한번에 판매하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}