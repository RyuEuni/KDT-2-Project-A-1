import React from "react";
import { Styles } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";
import { TouchableOpacity, View, Text } from "react-native";


export const GuideScreen:React.FC<any>=({navigation})=>{

  const keyword = ['매도/매수','시가/종가','배당금','보통주','제무제표','코스피/코스닥','주주','익절/손절','상투','상장','키워드']

  const keywords = keyword.map((item,index)=>{
    if(index%3===0){
      return(
      <TouchableOpacity style={Styles.guideKeywordPink}>
        <Text>{item}</Text>
      </TouchableOpacity>
      )
    }else if(index%3===2){
      return(
      <TouchableOpacity style={Styles.guideKeywordPurple}>
        <Text>{item}</Text>
      </TouchableOpacity>
      )
    }else{
      return(
      <TouchableOpacity style={Styles.guideKeywordYellow}>
        <Text>{item}</Text>
      </TouchableOpacity>
      )
    }
  })
  

    return (
      <View style={Styles.recommandBox}>
        <TopMenu navigation={navigation} />
        <View style={Styles.guideTheme}>
        {keywords}
        </View>

        <View style={Styles.guideCompany}>

        </View>

        <BottomMenu navigation={navigation} />
      </View>
    )
}