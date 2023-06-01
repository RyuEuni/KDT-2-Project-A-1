import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>; // Replace `any` with your stack's navigation type
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginScreen;