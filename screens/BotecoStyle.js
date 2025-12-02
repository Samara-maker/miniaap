import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import global from '../styles/global';

const INGREDIENTS = [ { id:'1', name:'Cerveja', price:8 }, { id:'2', name:'Bolinha de queijo', price:12 }, { id:'3', name:'Batata frita', price:15 } ];

export default function BotecoStyle(){
  const [theme, setTheme] = useState('mesa1');
  const themes = {
    mesa1: { bg:'#fff8e1', card:'#6b3e00', text:'#2b1b00' },
    mesa2: { bg:'#1a0b0b', card:'#330000', text:'#fff' }
  };
  const t = themes[theme];

  return (
    <View style={[global.page, { backgroundColor: t.bg }]}>
      <Text style={[{ color: t.text, fontSize:22, fontWeight:'700' }]}>Menu do Boteco</Text>
      <View style={{ flexDirection:'row', marginTop:12 }}>
        <TouchableOpacity onPress={() => setTheme('mesa1')} style={{ marginRight:10, padding:8, backgroundColor:t.card }}>
          <Text style={{ color:t.text }}>🍺 Mesa 01</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTheme('mesa2')} style={{ padding:8, backgroundColor:t.card }}>
          <Text style={{ color:t.text }}>🍻 Mesa 02</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop:16 }}>
        {INGREDIENTS.map(i => (
          <View key={i.id} style={{ flexDirection:'row', justifyContent:'space-between', padding:10, backgroundColor:'#fff', marginBottom:8 }}>
            <Text>{i.name}</Text>
            <Text>R$ {i.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
