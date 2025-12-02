import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ItemConta from '../components/ItemConta';
import global from '../styles/global';

const START = [
  { id:'1', nome:'Cerveja', preco:8, quantidade:0 },
  { id:'2', nome:'Bolinha de queijo', preco:12, quantidade:0 },
  { id:'3', nome:'Batata frita', preco:15, quantidade:0 },
];

export default function ContaScreen(){
  const [items, setItems] = useState(START);

  function update(id, delta){
    setItems(items.map(i => i.id === id ? {...i, quantidade: Math.max(0, i.quantidade + delta)} : i ));
  }

  const total = items.reduce((s,i)=> s + i.preco * i.quantidade, 0);

  return (
    <ScrollView style={global.page}>
      <Text style={global.titleLight}>Simulador de Conta</Text>
      <View style={{ marginTop:12 }}>
        {items.map(i => (
          <ItemConta
            key={i.id}
            nome={i.nome}
            preco={i.preco}
            quantidade={i.quantidade}
            onPlus={() => update(i.id, +1)}
            onMinus={() => update(i.id, -1)}
          />
        ))}
      </View>

      <Text style={{ color:'#cfe6ff', marginTop:12 }}>Total: R$ {total}</Text>
      {total > 80 && <Text style={{ color:'#ffcc00', marginTop:8 }}>Se deu mais de R$ 80, é porque alguém pediu Heineken.</Text>}
    </ScrollView>
  );
}
