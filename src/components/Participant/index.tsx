import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

type Props = {
  name: string;
}

export default function Participant(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{props.name}</Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}