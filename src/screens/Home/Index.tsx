import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';

import {styles} from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sabado, 13 de Abril de 2024</Text>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={'#6b6b6b'} 
      />
    </View>
  );
}