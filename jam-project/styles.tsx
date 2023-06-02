import { ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Constants from 'expo-constants';

export const StylesColors=StyleSheet.create({
  mainColor: {
    backgroundColor:"#D3EAFF",
    color:"#D3EAFF",
    borderBottomColor:"#D3EAFF"
  },
  subColorLight: {
    backgroundColor:"#E3F2FF"
  },
  subColorDeep: {
    backgroundColor:"#A5C7FB",
    color:"#A5C7FB"
  },
  grayColor: {
    backgroundColor:"#BDBDBD"
  },
  whiteColor: {
    backgroundColor:"#FFFFFF"
  },
  pinkColor:{
    backgroundColor:"#FFC1C1"
  },
  purpleColor:{
    backgroundColor:"#D8CEFF"
  },
  yellowColor:{
    backgroundColor:"#FAE7B6"
  }
});

export const StylesText = StyleSheet.create({
  smallSize: {
    fontSize:12
  },
  regularSize: {
    fontSize:16
  },
  mediumSize: {
    fontSize:20
  },
  largeSize: {
    fontSize:25
  },
  extraLargeSize: {
    fontSize:35
  },

  thinWeight: {
    fontSize:200
  },
  normalWeight: {
    fontSize:400
  },
  boldWeight: {
    fontSize:700
  },
  extraBoldWeight: {
    fontSize:900
  }
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
    fontSize: StylesText.extraLargeSize.fontSize
  },
  logoImage: {
    width: 40, 
    height: 40, 
    marginLeft: 5, 
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
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 10,
  },
  //! 홈 화면
  homeRoot: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%', 
    height: '100%', 
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'red',
    position:'relative',
    flex:1
  },
  homeWrap: {
    width: '100%', 
    height: '40%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
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

  // ! 바텀메뉴 스타일 부분
  bottomBox: {
    width: '100%',
    height: '9%',
    // backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:0,
    padding:0,
    position:'absolute',
    bottom:0,
    right:0,
    left:0
  },
  bottomView:{
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    margin:0,
    padding:0
  },
  // ! 바텀메뉴 터치버튼 부분
  bottomTouch:{
    height: '100%',
    width: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // shadowColor: '#fff',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7
  },

  // ! 바텀메뉴 이미지 부분
  bottomImg:{
    width:'100%',
    height:'70%',
    resizeMode:'contain'
  },

  // ! 바텀메뉴 글씨 부분
  bottomText:{
    width:'100%',
    height:'30%',
    textAlign:'center',
    fontSize:StylesText.regularSize.fontSize
  },

  // ! 지갑 
  walletBox:{
    width:'100%',
    height:'100%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'column',
    position:'relative',
    flex:1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent:'center',
  },
  walletContainer:{
    width:'100%',
    height:'80%',
    display:'flex',
    flexDirection:'column',
    backgroundColor:StylesColors.subColorLight.backgroundColor,
    position:'relative',
    justifyContent:'center',
    alignItems:'center'
  },
  walletAssetTotal:{
    width:'100%',
    height:'15%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  walletAssetName:{
    width:'35%',
    height:'50%',
    fontSize:StylesText.mediumSize.fontSize,
    backgroundColor:StylesColors.subColorDeep.backgroundColor,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    padding:10
  },
  walletAssetMoney:{
    width:'45%',
    height:'50%',
    fontSize:StylesText.mediumSize.fontSize,
    justifyContent:'center',
    textAlign:'center',
    padding:10,
    borderBottomColor:StylesColors.subColorDeep.backgroundColor,
    borderBottomWidth:3,
    borderStyle:'solid'
  },
  walletProcess:{
    width:'90%',
    height:'15%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  walletProcessStep:{
    width:'30%',
    height:'100%',
    display:'flex',
    flexDirection:'column'
  },
  walletProfit:{
    width:'90%',
    height:'15%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'column',
  },
  walletProfitTotal:{
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  walletbank:{
    width:'90%',
    height:'18%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'column',
  },
  walletbankLists:{
    width:'100%',
    height:'30%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    // borderBottomColor:StylesColors.mainColor.borderBottomColor,
    // borderStyle:'solid',
    // borderBottomWidth:3
  },
  walletbankList:{
    width:'25%',
    height:'100%',
    textAlign:'center'
  },

  // ! 추천페이지
  recommandBox:{
    width:'100%',
    height:'100%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexDirection:'column',
    position:'relative',
    flex:1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent:'center',
  },
  recommandTheme:{
    width:'100%',
    height:'30%',
    backgroundColor:StylesColors.mainColor.backgroundColor,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  },
  recommandKeywordPink:{
    width:'20%',
    height:'30%',
    backgroundColor:StylesColors.pinkColor.backgroundColor,
    borderRadius:10,
  },
  recommandKeywordPurple:{
    width:'20%',
    height:'30%',
    backgroundColor:StylesColors.purpleColor.backgroundColor,
    borderRadius:10,
  },
  recommandKeywordYellow:{
    width:'20%',
    height:'30%',
    backgroundColor:StylesColors.yellowColor.backgroundColor,
    borderRadius:10,
  }
});

