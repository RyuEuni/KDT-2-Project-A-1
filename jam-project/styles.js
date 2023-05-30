import { StyleSheet, Text, View } from 'react-native';

export const colors = StyleSheet.create({
  mainColor: "#D3EAFF",
  subColorLight: "#E3F2FF",
  subColorDeep: "#A5C7FB",
  grayColor: "#BDBDBD",
  whiteColor: "#FFFFFF"
});


export const styles = StyleSheet.create({
  homeBox: {
    width: '100%', 
    height: '100%', 
    backgroundColor: colors.mainColor
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

