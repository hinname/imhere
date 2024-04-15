import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  participantName: {
    color: '#fdfcfe',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24,
    textAlign: 'center',
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
});