import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const StylesColors = StyleSheet.create({
  mainColor: "#D3EAFF",
  subColorLight: "#E3F2FF",
  subColorDeep: "#A5C7FB",
  grayColor: "#BDBDBD",
  whiteColor: "#FFFFFF"
});

export const StylesText = StyleSheet.create({
  sizeSmall: 12,
  sizeExtraSmall: 16,
  sizeMedium: 20,
  sizeLarge: 25,
  sizeExtraLarge: 35,

  weightThin: 200,
  weightNormal: 400,
  weightBold: 700,
  weightExtraBold: 900

});

export const Styles = StyleSheet.create({
  //! 탑 메뉴 영역
  topRoot: {
    width: '100%',
    height: '7%',
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    position: 'absolute', 
    top: 0, 
    // left: 10,
    flex: 0,
    
    // borderWidth: 1,
    // borderColor: 'red'
  },
  topWrap: {
    width: "30%",
    height: "100%", 
    paddingLeft: 5,
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center",
    // justifyContent: "center",

  },
  //! 탑 메뉴 - 로고 부분
  logoWrap: {
    height: "100%", 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: 'red'
  },
  logoText: {
    fontSize: StylesText.sizeExtraLarge
  },
  logoImage: {
    width: 40, 
    height: 40, 
    marginLeft: 5, 
    // resizeMode: "contain"
    // marginTop: -5
  },
  //! 햄버거 버튼 영역
  hambergerWrap: {
    width: "35%", 
    height: "100%", 
    marginLeft: 20, 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-around",
    alignItems: "center",
  },
  hambergerBar: {
    width: '100%',
    height: "20%",
    backgroundColor: StylesColors.whiteColor,
    borderRadius: 10,

  },
  //! 홈 화면 - 검색창
  serchBox: {
    width: "100%",
    height: "5%",
    backgroundColor: StylesColors.whiteColor,
    borderRadius: 20,
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: 'red'
  },
  serchBar: {
    width: "80%",
    height: "100%",
    textAlign: "center",
    
    // borderWidth: 1,
    // borderColor: 'red'
  },
  serchButton: {
    width: "20%",
    height: "100%",
    marginTop: 2,
    backgroundColor: StylesColors.subColorDeep,
    borderRadius: 20,

    // borderWidth: 1,
    // borderColor: 'red'
  },
  serchButtonText: {
    marginTop: 6,
    fontSize: StylesText.sizeExtraSmall, 
    textAlign: "center",
    color: StylesColors.whiteColor,
    fontWeight: StylesText.weightExtraBold
  },
  //! 홈 화면
  homeRoot: {
    marginTop: Constants.statusBarHeight,
    width: '100%', 
    height: '100%', 
    backgroundColor: StylesColors.mainColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",


    borderWidth: 1,
    borderColor: 'red'
  },
  homeWrap: {
    width: '100%', 
    height: '70%', 
    backgroundColor: StylesColors.subColorLight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // flex: 1,


    borderWidth: 1,
    borderColor: 'black'
  },
  homePopular: {
    width: '100%', 
    height: '47%', 
    backgroundColor: StylesColors.subColorLight,
    borderRadius: 20,
    // flex: 1,


    borderWidth: 1,
    borderColor: 'red'
  },
  titleText: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: StylesText.sizeLarge, 
    fontWeight: StylesText.weightExtraBold
  },
  rankText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: StylesText.sizeMedium, 
    fontWeight: StylesText.weightExtraBold
  },
  homeLove: {
    width: '100%', 
    height: '47%', 
    backgroundColor: StylesColors.subColorLight,
    borderRadius: 20,
    // flex: 1,


    borderWidth: 1,
    borderColor: 'red'
  },
  container2: {
    width: 80, 
    height: 80, 
    backgroundColor: "beige"
  },
  container3: {
    width: 50, 
    height: 50, 
    backgroundColor:"indianred",
    alignSelf:'center', 
    // elevation:50 //앞으로 나와있는 효과
  },
});

