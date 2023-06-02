import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";


const RealtimeUpScreen:React.FC<any>=(navigation)=>{
  const [rankingText, setRankingText] = useState("")

  
  return(
    <View>
      <TopMenu navigation={navigation} />
      <View>
        <TouchableOpacity>
          <Text>상승</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>하락</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>최고가</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>최저가</Text>
        </TouchableOpacity>
      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}