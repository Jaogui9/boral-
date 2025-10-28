import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import EventCard from '../components/EventCard';

const mockEvents = [
  { id: '1', title: 'Balada Night', city: 'Piracicaba', date: '2025-11-07', price: 'R$30', description: 'Super festa com DJs locais.' },
  { id: '2', title: 'Workshop Foto', city: 'Limeira', date: '2025-11-09', price: 'R$80', description: 'Aprenda fotografia com profissionais.' },
  { id: '3', title: 'Campeonato de Skate', city: 'Piracicaba', date: '2025-11-12', price: 'Grátis', description: 'Evento esportivo aberto.' }
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, padding:16}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
        <Text style={{fontSize:24, fontWeight:'700'}}>Boralá — Próximos eventos</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Organizer')}>
          <Text style={{color:'#673ab7'}}>Sou organizador</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockEvents}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <EventCard event={item} onPress={()=>navigation.navigate('EventDetail',{event:item})}/>
        )}
        ItemSeparatorComponent={()=> <View style={{height:12}} /> }
      />
    </SafeAreaView>
  );
}
