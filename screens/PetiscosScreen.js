import React from 'react';
import { View, Text, FlatList } from 'react-native';
import global from '../styles/global';

const PETISCOS = [
  { id:'1', name:'Bolinha de queijo', desc:'Crocante + alegria' },
  { id:'2', name:'Torresmo', desc:'Aumenta a alegria +10 XP' },
  { id:'3', name:'Batata frita', desc:'Melhor com catchup' },
  { id:'4', name:'Calabresa', desc:'Clássico do boteco' },
];

function Item({ item }) {
  return (
    <View style={{ padding:12, borderRadius:8, backgroundColor:'#081126', marginBottom:10 }}>
      <Text style={{ color:'#e6eef8', fontWeight:'700' }}>{item.name}</Text>
      <Text style={{ color:'#9fb7d9' }}>{item.desc}</Text>
    </View>
  );
}

export default function PetiscosScreen(){
  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Petiscos</Text>
      <FlatList data={PETISCOS} keyExtractor={i=>i.id} renderItem={({item})=> <Item item={item} />} style={{ marginTop:12 }} />
    </View>
  );
}
