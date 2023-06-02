import React from "react";
import { FlatList, View, Text } from "react-native";
import { Styles, StylesColors } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";
import Icon from "react-native-vector-icons/AntDesign"

// type walletProps = {
//   navigation: any;
// }

const stockdata = [{
  company: '삼성전자',
  ea: 35,
  marketPrice: 69000,
  buyPrice: 68000,
},
{
  company: '하이트',
  ea: 30,
  marketPrice: 69000,
  buyPrice: 79000,
}
]

const stockList = (data) => {
  return (<View style={Styles.walletbankLists}>
    <View style={Styles.walletbankList}>
      <Text>{data.company}</Text>
    </View>
    <View style={Styles.walletbankList}>
      <Text>{data.ea}</Text>
    </View>
    <View style={Styles.walletbankList}>
      <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>{data.marketPrice}</Text>
      <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>data.buyPrice</Text>
    </View>
    <View style={Styles.walletbankList}>
      <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>{data.marketPrice * data.ea}</Text>
      <Text style={{ width: '100%', height: '50%', textAlign: 'center', fontSize: 12 }}>{((data.marketPrice - data.buyPrice) / data.buyPrice) + '%'}</Text>
    </View>
  </View>
  )
}

const WalletScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={Styles.walletBox}>
      {/* top메뉴 */}
      <TopMenu navigation={navigation} />

      {/* 메인 부분 */}
      <View style={Styles.walletContainer}>

        {/* 총 자산 */}
        <View style={Styles.walletAssetTotal}>
          <Text style={Styles.walletAssetName}>총 자산</Text>
          <Text style={Styles.walletAssetMoney}>5,000,000원</Text>
        </View>

        {/* 접수 처리 구판완 */}
        <View style={Styles.walletProcess}>
          <View style={Styles.walletProcessStep}>
            <View style={{ width: '100%', height: '70%' }}>

            </View>
            <Text style={{ width: '100%', height: '25%', textAlign: 'center' }}>
              접수
            </Text>
          </View>
          <Icon name="right" size={20} color={StylesColors.subColorDeep.color} />
          <View style={Styles.walletProcessStep}>
            <View style={{ width: '100%', height: '70%' }}>

            </View>
            <Text style={{ width: '100%', height: '25%', textAlign: 'center' }}>
              처리 중
            </Text>
          </View>
          <Icon name="right" size={20} color={StylesColors.subColorDeep.color} />

          <View style={Styles.walletProcessStep}>
            <View style={{ width: '100%', height: '70%' }}>

            </View>
            <Text style={{ width: '100%', height: '25%', textAlign: 'center' }}>
              구매/판매 완료
            </Text>
          </View>
        </View>

        {/* 구매가능금액 */}
        <View style={Styles.walletAssetTotal}>
          <Text style={Styles.walletAssetName}>구매가능 금액</Text>
          <Text style={Styles.walletAssetMoney}>2,400,000원</Text>
        </View>

        {/* 수익금/이자수익 */}
        <View style={Styles.walletProfit}>
          <View style={Styles.walletProfitTotal}>
            <Text style={{ width: '30%', textAlign: "left" }}>수익금</Text>
            <Text style={{ textAlign: "right" }}>원</Text>
          </View>
          <View style={Styles.walletProfitTotal}>
            <Text style={{ width: '30%', textAlign: "left" }}>이자수익</Text>
            <Text style={{ textAlign: "right" }}>원</Text>
          </View>
        </View>

        {/* 주식 */}
        <View style={Styles.walletAssetTotal}>
          <Text style={Styles.walletAssetName}>주식</Text>
          <Text style={Styles.walletAssetMoney}>2,600,000원</Text>
        </View>

        {/* 주식내용 */}
        <View style={Styles.walletbank}>
          <View style={Styles.walletbankLists}>
            <View style={Styles.walletbankList}>
              <Text>기업명</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text>보유 개수</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>현재 금액</Text>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>구매 금액</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text>평가 금액</Text>
            </View>
          </View>


          <FlatList
            data={stockdata}
            renderItem={stockList} />
          {/* <View style={Styles.walletbankLists}>
            <View style={Styles.walletbankList}>
              <Text>삼성전자</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text>35</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>69,000원</Text>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>68,000원</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>2,343,000원</Text>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center', fontSize:12, color:'red'}}>+0.03%</Text>
            </View>
          </View>

          <View style={Styles.walletbankLists}>
            <View style={Styles.walletbankList}>
              <Text>하이트</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text>20</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>68,000원</Text>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>79,000원</Text>
            </View>
            <View style={Styles.walletbankList}>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center' }}>1,890,222원</Text>
              <Text style={{ width: '100%', height: '50%', textAlign: 'center', fontSize:12, color:'skyblue'}}>-0.02%</Text>
            </View>
          </View> */}


        </View>

      </View>

      {/* bottom 메뉴 */}
      <BottomMenu navigation={navigation} />
    </View>
  )
}

export default WalletScreen