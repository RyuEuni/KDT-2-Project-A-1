import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";

type walletProps = {
  navigation: any;
}

const WalletScreen: React.FC<walletProps> = ({ navigation }) => {
  return (
    <View style={Styles.walletBox}>
      <TopMenu navigation={navigation} />
      <View style={Styles.walletContainer}>
        <View style={Styles.walletAsset}>
          <Text style={Styles.walletAssetName}>총 자산</Text>
          <Text>5,000,000원</Text>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  )
}

export default WalletScreen