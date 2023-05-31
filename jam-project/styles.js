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
  smallSize: 12,
  regularSize: 16,
  mediumSize: 20,
  largeSize: 25,
  extraLargeSize: 35,

  thinWeight: 200,
  normalWeight: 400,
  boldWeight: 700,
  extraBoldWeight: 900

});

export const Styles = StyleSheet.create({
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
    
    borderWidth: 1,
    borderColor: 'red'
  },
  logoWrap: {
    height: "100%", 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: 'red'
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
  logoText: {
    fontSize: StylesText.extraLargeSize
  },
  logoImage: {
    width: 40, 
    height: 40, 
    marginLeft: 5, 
    // marginTop: -5
  },
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
    height: '80%', 
    backgroundColor: StylesColors.subColorLight,
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

