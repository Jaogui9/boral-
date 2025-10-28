import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

export default function EventDetailScreen({ route }) {
  const { event } = route.params || {};
  if(!event) return <SafeAreaView><Text>Nenhum evento selecionado</Text></SafeAreaView>;

  const handleBuy = () => {
    Alert.alert('Comprar ingresso', 'Integre aqui com MercadoPago/Stripe.');
  };

  return (
    <SafeAreaView style={{flex:1, padding:16}}>
      <Text style={{fontSize:28, fontWeight:'700'}}>{event.title}</Text>
      <Text style={{marginTop:8}}>{event.city} • {event.date}</Text>
      <Text style={{marginTop:8, fontSize:18}}>{event.price}</Text>
      <View style={{marginTop:16}}>
        <Text>{event.description}</Text>
      </View>

      <TouchableOpacity onPress={handleBuy} style={{marginTop:24, backgroundColor:'#ff6f00', padding:12, borderRadius:8}}>
        <Text style={{color:'#fff', textAlign:'center'}}>Comprar ingresso</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
