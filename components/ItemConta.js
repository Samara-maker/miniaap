import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ItemConta({ nome, preco, quantidade, onPlus, onMinus }){
  return (
    <View style={{ padding:12, backgroundColor:'#081126', marginBottom:8, borderRadius:8 }}>
      <Text style={{ color:'#e6eef8', fontWeight:'700' }}>{nome}</Text>
      <Text style={{ color:'#9fb7d9' }}>R$ {preco} x {quantidade}</Text>
      <View style={{ flexDirection:'row', marginTop:8 }}>
        <TouchableOpacity onPress={onPlus} style={{ marginRight:8, padding:8, backgroundColor:'#0ea5e9', borderRadius:6 }}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMinus} style={{ padding:8, backgroundColor:'#ff6b6b', borderRadius:6 }}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
