import { StatusBar } from 'expo-status-bar';
import { Text, 
        View, 
        TextInput, 
        TouchableOpacity, 
        ScrollView, 
        FlatList,
        Alert
      } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(participantName)) {
      return Alert.alert('Participante já cadastrado', 'Não é possível adicionar o mesmo participante duas vezes');
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {    
    Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text 
      style={styles.h1}>
        Lista de participantes
        </Text> 

      <View style={styles.form}>
        <TextInput style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={'#6b6b6b'}
        keyboardType="default"
        onChangeText={setParticipantName}
        value={participantName}
        />

        <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantAdd}
        >
          <Text 
          style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
      keyExtractor={item => item}
      data={participants}
      renderItem={({item}) => (
        <Participant
        key={item}
        name={item} 
        onRemove={() => handleParticipantRemove(item)}
        />
      )}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nenhum participante cadastrado
        </Text>
      )}
      />
    </View>
  );
}


