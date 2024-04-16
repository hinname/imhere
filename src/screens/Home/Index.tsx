import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import {styles} from './styles';

import Participant from '../../components/Participant';

export default function Home() {
  const participants = ['Herivelton', 
  'João', 'Maria', 'Ana', 'Pedro', 
  'Lucas', 'Gabriel', 'Rafael', 'Paulo', 
  'Luciana', 'Mariana', 'Juliana', 'Júlia']

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sabado, 13 de Abril de 2024</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'} 
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant, index) => (
          <Participant key={index} name={participant} onRemove={() => handleParticipantRemove(participant)} />
        ))
      }
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}