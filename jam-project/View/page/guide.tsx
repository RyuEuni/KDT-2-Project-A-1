import React, {useState} from "react";
import { Styles } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { guideContent } from "./guidecontent";

export const GuideScreen: React.FC<any> = ({ navigation }) => {

  const keyword = ['매도/매수', '시가/종가', '배당금', '보통주', '재무제표', '코스피/코스닥', '주주', '익절/손절', '상투', '상장', '키워드']

  const [guideContents, setGuideContent] = useState(guideContent('매도/매수'));

  const guideTab =(tab:string)=>{
    if(tab==='매도/매수'){
      setGuideContent(guideContent('매도/매수'))
    }else if(tab==='시가/종가'){
      setGuideContent(guideContent('시가/종가'))
    }else if(tab==='배당금'){
      setGuideContent(guideContent('배당금'))
    }else if(tab==='보통주'){
      setGuideContent(guideContent('보통주'))
    }else if(tab==='재무제표'){
      setGuideContent(guideContent('재무제표'))
    }else if(tab==='코스피/코스닥'){
      setGuideContent(guideContent('코스피/코스닥'))
    }else if(tab==='주주'){
      setGuideContent(guideContent('주주'))
    }else if(tab==='익절/손절'){
      setGuideContent(guideContent('익절/손절'))
    }else if(tab==='상투'){
      setGuideContent(guideContent('상투'))
    }else if(tab==='상장'){
      setGuideContent(guideContent('상장'))
    }else if(tab==='키워드'){
      setGuideContent(guideContent('키워드'))
    }
  }
  

  const keywords = keyword.map((item, index) => {
    if (index % 3 === 0) {
      return (
        <TouchableOpacity style={Styles.guideKeywordPink} onPress={()=>{guideTab(item)}}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )
    } else if (index % 3 === 2) {
      return (
        <TouchableOpacity style={Styles.guideKeywordPurple} onPress={()=>{guideTab(item)}}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={Styles.guideKeywordYellow} onPress={()=>{guideTab(item)}}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )
    }
  })

  return (
    <View style={Styles.guideBox}>
      <TopMenu navigation={navigation} />

      <View style={Styles.guideTheme}>
        {/* 배열 및 함수를 이용하여 생성 */}
        {keywords}
      </View>

      <ScrollView contentContainerStyle={Styles.guideScroll}
        >
          {/* 위의 함수를 이용해 적용 */}
        {guideContents}
      </ScrollView>
      <BottomMenu navigation={navigation} />
    </View>
  )
}