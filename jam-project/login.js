import React from 'react';
import {View, Button} from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Signup')} />
      {/* onPress를 이용해 버튼 클릭 시 이동할 페이지와 연결해준다. */}
    </View>
  );
}