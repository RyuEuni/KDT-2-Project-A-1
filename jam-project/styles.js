import { StyleSheet} from 'react-native';

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
  homeBox: {
    width: '100%', 
    // height: '100%', 
    height: 80, 
    backgroundColor: StylesColors.mainColor
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
  bottonBox: {
    width: '100%',
    height: '10%',
    backgroundColor:'#A5C7FB',
    display:'flex',

  }
});

