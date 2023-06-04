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
        <View>
          <Text>구매 목록</Text>
          <TouchableOpacity>
            <Icon name="check" size={10} color="red" />
          </TouchableOpacity>
          <Text>전체 선택</Text>
        </View>

        {/* 구입 리스트 출력 */}
        <View style={Styles.cartBuyList}>

        </View>
        <TouchableOpacity>
          <Text>한번에 구매하기</Text>
        </TouchableOpacity>
      </View>

      {/* 판매 장바구니 */}
      <View style={Styles.cartSell}>
        <Text>판매 목록</Text>

        {/* 판매 리스트 출력 */}
        <View style={Styles.cartSellList}>

        </View>
        <TouchableOpacity>
          <Text>한번에 판매하기</Text>
        </TouchableOpacity>
      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}