import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function ChoicePageOne() {
  const navigation = useNavigation<ChoicePageOneNavigationProp>();

  const handleChoice = (choice) => {
    navigation.navigate('ChoicePageTwo', { choice: choice });
    console.log(`${choice}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 주식 스타일을 선호하시나요?</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleChoice('Choice 1')}>
        <Text style={styles.text}>안정적인 투자 스타일</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleChoice('Choice 2')}>
        <Text style={styles.text}>수익 분배형 투자 스타일</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleChoice('Choice 3')}>
        <Text style={styles.text}>수익 중심형 투자 스타일</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleChoice('Choice 4')}>
        <Text style={styles.text}>공격적인 투자 스타일</Text>
      </TouchableOpacity>
    </View>
  );
}