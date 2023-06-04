import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

/**
 * 앱 테마 컬러 리스트
 * mainColor: '#D3EAFF'
 * subColorLight: '#E3F2FF'
 * subColorDeep: '#A5C7FB'
 * grayColor: '#BDBDBD'
 */

export const StylesColors = StyleSheet.create({
  mainColor: {
    backgroundColor: '#D3EAFF'
  },
  subColorLight: {
    backgroundColor: '#E3F2FF'
  },
  subColorDeep: {
    backgroundColor: '#A5C7FB'
  },
  grayColor: {
    backgroundColor: '#BDBDBD'
  },
  whiteColor: {
    backgroundColor: '#FFFFFF'
  }
});
export const StylesText = StyleSheet.create({
  sizeSmall: {
    fontSize: 12
  },
  sizeExtraSmall: {
    fontSize: 16
  },
  sizeMedium: {
    fontSize: 20
  },
  sizeLarge: {
    fontSize: 25
  },
  sizeExtraLarge: {
    fontSize: 35
  },
  weightThin: {
    fontWeight: '200'
  },
  weightNormal: {
    fontWeight: '400'
  },
  weightBold: {
    fontWeight: '700'
  },
  weightExtraBold: {
    fontWeight: '900'
  }
});

export const Styles = StyleSheet.create({
  //! 탑 메뉴 영역
  topRoot: {
    width: '100%',
    height: '7%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    flex: 0,
  },
  topWrap: {
    width: '30%',
    height: '100%',
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //! 탑 메뉴 - 로고 부분
  logoWrap: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: StylesText.sizeExtraLarge.fontSize
  },
  logoImage: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  //! 햄버거 버튼 영역
  hambergerWrap: {
    width: '35%',
    height: '100%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hambergerBar: {
    width: '100%',
    height: '20%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 10,
  },
  //! 홈 화면 - 검색창
  serchBox: {
    width: '95%',
    height: '6%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 10,
  },
  serchBar: {
    width: '80%',
    height: '100%',
    textAlign: 'center',
  },
  serchButton: {
    width: '20%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,
  },
  serchButtonText: {
    marginTop: 5,
    fontSize: StylesText.sizeExtraSmall.fontSize,
    textAlign: 'center',
    color: StylesColors.whiteColor.backgroundColor,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  //! 홈 화면
  homeRoot: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    position: 'relative',
    flex: 1
  },
  homeArea: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    position: 'relative',
  },
  homeWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  homePopular: {
    width: '100%',
    height: '45%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red'
  },
  titleText: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: StylesText.sizeLarge.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  rankText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: StylesText.sizeMedium.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  homeLove: {
    width: '100%',
    height: '45%',
    backgroundColor: '#E3F2FF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red'
  },
  container2: {
    width: 80,
    height: 80,
    backgroundColor: 'beige'
  },
  container3: {
    width: 50,
    height: 50,
    backgroundColor: 'indianred',
    alignSelf: 'center',
  },

  // ! 바텀메뉴 스타일 부분
  bottomBox: {
    width: '100%',
    height: '10%',
    // backgroundColor: StylesColors.subColorDeep.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  bottomView: {
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  // ! 바텀메뉴 터치버튼 부분
  bottomTouch: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },

  // ! 바텀메뉴 이미지 부분
  bottomImg: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },

  // ! 바텀메뉴 글씨 부분
  bottomText: {
    width: '100%',
    height: '30%',
    textAlign: 'center',
    fontSize: StylesText.sizeSmall.fontSize
  },

  //! 햄버거 메뉴
  hamBox: {
    marginTop: Constants.statusBarHeight,
    marginLeft: '50%',
    marginBottom: Constants.BottomTabBarHeight,
    width: '50%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    position: 'relative',
    flex: 1
  },
  hamTop: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hamCategory: {
    width: '100%',
    height: '90%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  //! 햄버거 - 이름 
  hamName: {
    width: '40%',
    marginTop: 10,
    marginLeft: 10,
    fontSize: StylesText.sizeExtraSmall.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight,

  },
  //! 햄버거 - 회원가입, 로그인 버튼
  hamButton: {
    width: '30%',
    height: '30%',
    marginLeft: 5,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    marginTop: 10,
    textAlign: 'center',

  },
  hamButtonText: {
    marginTop: 3,
    textAlign: 'center',
    fontSize: StylesText.sizeSmall.fontSize,
    fontWeight: StylesText.weightBold.fontWeight,

  },
  //! 햄버거 - 메뉴 리스트
  hamCategoryList: {
    width: '90%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  hamListWrap: {
    width: '80%',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: StylesColors.grayColor.backgroundColor

  },
  hamListText: {
    textAlign: 'center',
  },
  //! 로그인 화면
  loginBox: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  backButton: {
    width: '6%',
    height: '6%',
    marginRight: '85%',
    marginTop: '2%',
  },
  loginTitle: {
    width: '25%',
    height: '7%',
    fontSize: StylesText.sizeExtraLarge.fontSize,
    marginRight: '62%',
    marginTop: '5%',

  },
  loginImage: {
    width: '25%',
    height: '12%',
    resizeMode: 'contain',
    marginTop: '10%',
    marginBottom: '10%',
  },
  idPwWrap: {
    width: '85%',
    height: '5%',
    marginTop: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  idPwText: {
    width: '15%',
    height: '100%',
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginTop: '3%'
  },
  idPwInput: {
    width: '82%',
    height: '100%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    textAlign: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,

  },
  //! 계정찾기, 회원가입 버튼
  loginPageBtnWrap: {
    width: '80%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15%',

  },
  loginPageBtn: {
    width: '45%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  loginPageBtnText: {
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center',
    marginTop: 7
  },
  //! 로그인 버튼
  loginPageLoginBtn: {
    width: '80%',
    height: '5%',
    marginTop: '3%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  //! 회원가입 페이지
  signUpTitleWrap: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  signUpTitle: {
    width: '30%',
    height: '50%',
    fontSize: 33,
    textAlign: 'center',
    marginLeft: '5%',

  },
  signUpImage: {
    width: '10%',
    height: '50%',
    resizeMode: 'contain',
    marginLeft: '2%',

    borderWidth: 1,
    borderColor: 'red'
  },

  //! 회원가입 목록
  signUpListWrap: {
    width: '100%',
    height: '5%',
    marginTop: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'red'
  },
  signUpListText: {
    width: '30%',
    height: '65%',
    fontSize: StylesText.sizeExtraSmall.fontSize,
    fontWeight: StylesText.weightBold.fontWeight,
    textAlign: 'center',

  },
  signUpInput: {
    width: '65%',
    height: '100%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    textAlign: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,

  },
  //! 회원가입, 계정찾기 쪽 버튼
  signUpNFindBtn: {
    width: '35%',
    height: '5%',
    marginTop: '10%',
    marginLeft: '50%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },

  // ! 장바구니 
  cartBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: StylesColors.mainColor.backgroundColor,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  cartBuy: {
    width: "100%",
    height: "35%",
    marginBottom: 50,
  },
  cartBuyList: {
    width: "100%",
    height: "70%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: "flex",
    flexDirection: "column"
  },
  cartLists: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth:1,
    borderBottomColor:StylesColors.subColorDeep.backgroundColor,
  },
  cartList:{
    width:"100%",
    height:"30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cartListItemCompany: {
    width: "30%",
    height: "100%",
    textAlign: "left",
    // fontSize:StylesText.sizeSmall.fontSize
  },
  cartListItemEA: {
    width: "30%",
    height: "100%",
    textAlign: "right",
    // fontSize:StylesText.sizeSmall.fontSize
  },
  cartListItemPrice: {
    width: "30%",
    height: "100%",
    textAlign: "center",
    // fontSize:StylesText.sizeMedium.fontSize
  },
  cartListClick: {
    width: "10%",
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  cartPrice:{
    width:"100%",
    height:"15%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:10
  },
  cartPriceText:{
    width:"50%",
    height:"100%",
    textAlign:'center'
    
  },
  cartTotalPrice:{
    width:"100%",
    height:"20%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  cartTotalPriceText:{
    width:"50%",
    height:"100%",
    fontSize:StylesText.sizeMedium.fontSize,
    textAlign:'center'
    
  },
  cartSell: {
    width: "100%",
    height: "35%",
    marginBottom: 30
  },
  cartSellList: {
    width: "100%",
    height: "70%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
  },


  // ! 목록 이름 & 버튼 스타일
  cartTitle: {
    width: "100%",
    height: "15%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  cartTitleText: {
    width: "30%",
    // height:10,
    fontSize: StylesText.sizeMedium.fontSize,
    left: 20,
    top: 10
  },
  cartchoose: {
    width: "22%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  cartButton: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  cartButtonBox: {
    width: 120,
    height: 40,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10
  },



});

