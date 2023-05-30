import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles.js';


export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChoicePageOne">
        <Stack.Screen name="ChoicePageOne" component={ChoicePageOne} options={{ headerShown: false }}/>
        <Stack.Screen name="ChoicePageTwo" component={ChoicePageTwo} options={{ headerShown: false }}/>
        <Stack.Screen name="ChoicePageThree" component={ChoicePageThree} options={{ headerShown: false }}/>
        <Stack.Screen name="ChoicePageFour" component={ChoicePageFour} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}


