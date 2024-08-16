import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 24,
    color: 'white',
  },
  buttonText: {
    fontSize: 24,
    paddingBottom : 10,
    color: '#FFF',
  },
  input: {
    flex: 1,
    height: 56,
    borderColor: '#6b6b6b',
    borderWidth: 1,
    color: 'white',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#1F1E35',
    borderRadius: 5,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
