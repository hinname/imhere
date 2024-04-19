import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

import {styles} from './styles';

import Participant from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);

  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(name: string) {
    if (!name) {
      return Alert.alert('Preencha o campo corretamente!', 'Digite o nome do participante');
    }
    if(participants.includes(name)){
      return Alert.alert('Participante existe', 'Já existe um paticipante na lista com esse nome');
    }
    setParticipants([...participants, name]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover o(a) participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => 
          {
            Alert.alert('Participante removido', `O(A) participante ${name} foi removido com sucesso!`);
            setParticipants(participants.filter((participantName) => participantName != name));
          }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    
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
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participantName)}>
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