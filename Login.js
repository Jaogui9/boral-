import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center', padding:20}}>
      <Text style={{fontSize:22, marginBottom:20}}>Entrar no Boralá</Text>
      <TouchableOpacity style={{padding:12, backgroundColor:'#673ab7', borderRadius:8, marginBottom:12}} onPress={()=>alert('Implementar Firebase Auth here')}>
        <Text style={{color:'#fff'}}>Entrar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Continuar como visitante</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
