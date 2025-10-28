import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function OrganizerScreen({ navigation }) {
  const [title,setTitle] = useState('');
  const [city,setCity] = useState('');
  const [date,setDate] = useState('');
  const [price,setPrice] = useState('');

  const handleCreate = () => {
    // Placeholder: aqui você deveria enviar para Firestore
    Alert.alert('Evento criado (mock)', `${title} — ${city} — ${date} — ${price}`);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{flex:1, padding:16}}>
      <Text style={{fontSize:20, fontWeight:'700'}}>Criar evento</Text>

      <TextInput placeholder="Título" value={title} onChangeText={setTitle} style={{borderWidth:1, padding:8, marginTop:12, borderRadius:8}} />
      <TextInput placeholder="Cidade" value={city} onChangeText={setCity} style={{borderWidth:1, padding:8, marginTop:12, borderRadius:8}} />
      <TextInput placeholder="Data (YYYY-MM-DD)" value={date} onChangeText={setDate} style={{borderWidth:1, padding:8, marginTop:12, borderRadius:8}} />
      <TextInput placeholder="Preço" value={price} onChangeText={setPrice} style={{borderWidth:1, padding:8, marginTop:12, borderRadius:8}} />

      <TouchableOpacity onPress={handleCreate} style={{marginTop:20, backgroundColor:'#673ab7', padding:12, borderRadius:8}}>
        <Text style={{color:'#fff', textAlign:'center'}}>Criar evento (mock)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
