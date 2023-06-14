// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import {Styles, StylesColors, StylesText} from '../../View/style/styles'


// export default function ContentReturn(activeTab: string, cmpCode:string, cmpName:string, cmpPr:string, navigation: any) {
//   const ListItem = ({ text }) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.text}>{text}</Text>
//       </View>
//     );
//   };
  
//   const ListWithTwoColumns = () => {
//     const data = [
//       'Item 1',
//       'Item 2',
//       'Item 3',
//       'Item 4',
//       'Item 5',
//       'Item 6',
//       'Item 7',
//       'Item 8',
//       'Item 9',
//       'Item 10',
//     ];
  
//     const renderListItems = () => {
//       const itemsPerColumn = Math.ceil(data.length / 2);
//       const columns = [[], []];
  
//       // Split data into two columns
//       for (let i = 0; i < data.length; i++) {
//         const columnIndex = i < itemsPerColumn ? 0 : 1;
//         columns[columnIndex].push(data[i]);
//       }
  
//       return columns.map((column, index) => (
//         <View key={index} style={styles.column}>
//           {column.map((item, itemIndex) => (
//             <ListItem key={itemIndex} text={item} />
//           ))}
//         </View>
//       ));
//     };
  
//     return (
//       <ScrollView contentContainerStyle={styles.container} horizontal>
//         {renderListItems()}
//       </ScrollView>
//     );
//   };
// }