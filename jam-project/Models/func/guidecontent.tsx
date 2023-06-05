import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Styles } from "../../View/style/styles";


export const guideContent = (keyword: string) => {
  if (keyword === '매도/매수') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 매도/매수가 뭐야? </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 주식을 사는 게 매수,{"\n"}
              파는 게 매도야! </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 1주, 2주하던데,{"\n"}
              주가 뭐야?</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 주식도 세는 단위가 있어.{"\n"}
              이걸 '주'라고 표현해 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 주식을 산다고 주문하면{"\n"}
              바로 체결되는 게 아니야? </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 보통은 바로 체결되지 않아{"\n"}
              이유는 총 2가지가 있어.{"\n"}
              1. 내가 주문한 금액으로 사거나 파는 사람이 없는 경우,{"\n"}
              2. 사거나 팔려는 사람에 반대되는 사람이 더 많아서 내 순위가 밀려난 경우
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  } else if (keyword === '시가/종가') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  } else if (keyword === '배당금') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '보통주') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '재무제표') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '코스피/코스닥') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '주주') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '익절/손절') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '상투') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '상장') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }else if (keyword === '키워드') {
    return (
      <View style={Styles.guideContent}>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>

        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문</Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRight}>
          <View style={Styles.guideSayRight}>
            <Text style={Styles.guideText}> 답변 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRight} />
        </View>
        <View style={Styles.guideLift}>
          <View style={Styles.guideSayleft}>
            <Text style={Styles.guideText}> 질문 </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_Pig2.png')} style={Styles.guidePigLeft} />
        </View>

        <View style={Styles.guideRightBig}>
          <View style={Styles.guideSayRightBig}>
            <Text style={Styles.guideText}> 좀 긴 답변. 짧은 답변으로 더 할거면 스타일 변경 필요.
            </Text>
          </View>
          <Image source={require('../../Resource/Icon/JamStock_pig_pink.png')} style={Styles.guidePigRightBig} />
        </View>
      </View>
    )
  }
}
