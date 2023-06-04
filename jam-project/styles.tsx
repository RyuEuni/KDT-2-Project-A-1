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
    backgroundColor: '#A5C7FB',
    borderBottomColor:'#A5C7FB'
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
    zIndex: 1
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
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    position: 'absolute',
    bottom: 0,
    zIndex: 1
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

  // ! 마이페이지 - 수정 전
  myPageBox: {
    width: "100%",
    height: "100%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
  },
  myPageMain:{
    width:"100%",
    height:"85%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },

  myPagePhoto: {
    width: "100%",
    height: "30%",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
    // top:30
  },
  myPagePhotoView: {
    width: "40%",
    height: "80%",
    borderRadius: 80,
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  myPagePhotoAdd: {
    width: 30,
    height: 30,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    position: 'relative',
    borderRadius:30,
    bottom: 30,
    left: 60,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },

  myPageInfoBox: {
    width: "100%",
    height: "15%",
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor:StylesColors.subColorDeep.borderBottomColor,
    borderBottomWidth:1,
  },
  myPageInfo: {
    width: "100%",
    height: "30%",
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  myPageTitle: {
    width: "30%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center'
  },
  myPageText: {
    width: "70%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'left'
  },

  myPageAlarm: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    paddingTop:15
  },
  myPageTitleBig: {
    width: "30%",
    height: "30%",
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center'
  },

  myPageAlarmText: {
    width: "100%",
    height: "25%",
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  
  myPageEdits: {
    width: "30%",
    height: "15%",
    borderRadius: 30,
  },
  myPageEdit: {
    width: 120,
    height: 60,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
  },

  // ! 마이페이지 - 수정 후 ( 아래 빼곤 수정 전과 동일 )
  myPageAlarmEdit: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    paddingTop:15
  },
  myPagePasswordEdit: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "column",
    paddingTop:15,
    borderTopWidth:1,
    borderTopColor:StylesColors.subColorDeep.borderBottomColor,
    
  },

  myPagePasswordText: {
    width: "100%",
    height: "35%",
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    // padding:5
  },

  myPageTitleBigEdit: {
    width: "45%",
    height: "30%",
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginBottom:13
  },

  myPageTitleEdit: {
    width: "35%",
    // height: "50%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center',
    marginLeft:5
  },
  myPageTextEdit: {
    width: "40%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'left',
    backgroundColor:StylesColors.whiteColor.backgroundColor
  },

  //  ! 완료 버튼
  myPageEditing: {
    width: "100%",
    height: "10%",
    borderRadius: 30,
    display:"flex",
    flexDirection:"row-reverse",
  },
  myPageEditDone: {
    width: 80,
    height: 35,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    marginRight:20,
    marginTop:20
  }



});

