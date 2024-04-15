import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  input : {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 8,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    marginRight: 7,
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
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 48,
    flexDirection: 'row',
  }
});