import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import {styles} from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sabado, 13 de Abril de 2024</Text>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={'#6b6b6b'} 
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}