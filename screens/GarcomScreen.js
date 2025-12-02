import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import global from '../styles/global';

export default function GarcomScreen(){
  const [loading,setLoading] = useState(false);
  const [pedido,setPedido] = useState(null);

  async function chamarGarcom(){
    setLoading(true);
    setPedido(null);
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await res.json();
      setPedido({ title: json.title, body: json.body });
    }catch(e){
      setPedido({ title:'Erro', body:'O garçom sumiu.' });
    }finally{ setLoading(false); }
  }

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Garçom Online</Text>
      <Text style={[global.textLight, { marginTop:8 }]}>Clique em “Chamar o Garçom”</Text>
      <View style={{ marginTop:12 }}>
        <Button title="Chamar o Garçom" onPress={chamarGarcom} />
      </View>
      {loading && <ActivityIndicator style={{ marginTop:12 }} />}
      {pedido && (
        <View style={{ marginTop:12, padding:12, backgroundColor:'#081126', borderRadius:8 }}>
          <Text style={{ color:'#e6eef8', fontWeight:'700' }}>{pedido.title}</Text>
          <Text style={{ color:'#9fb7d9', marginTop:6 }}>{pedido.body}</Text>
          <Text style={{ color:'#cfe6ff', marginTop:8 }}>Calma chefia, o garçom foi lá pegar os dados!</Text>
        </View>
      )}
    </View>
  );
}
