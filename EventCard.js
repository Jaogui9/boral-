import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function EventCard({ event, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{borderWidth:1, borderRadius:12, padding:12, borderColor:'#eee'}}>
      <Text style={{fontSize:18, fontWeight:'600'}}>{event.title}</Text>
      <Text style={{marginTop:6}}>{event.city} • {event.date}</Text>
      <Text style={{marginTop:6, fontWeight:'700'}}>{event.price}</Text>
    </TouchableOpacity>
  );
}
