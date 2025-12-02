import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import global from '../styles/global';

export default function BotecoUseState(){
  const [cervejas, setCervejas] = useState(0);
  const [humor, setHumor] = useState('Sóbrio');

  useEffect(() => {
    if(cervejas <= 2) setHumor('Sóbrio');
    else if(cervejas <=4) setHumor('Alegrinho');
    else if(cervejas <=6) setHumor('Filosofando');
    else setHumor('Mandando áudio de 3 minutos');
  }, [cervejas]);

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Contador de Cerveja</Text>
      <Text style={[global.textLight, {marginTop:8}]}>Nível atual: {cervejas}</Text>

      <View style={{ flexDirection:'row', marginTop:16 }}>
        <TouchableOpacity onPress={() => setCervejas(c=>c+1)} style={{ marginRight:12, padding:10, backgroundColor:'#0ea5e9', borderRadius:8 }}>
          <Text style={{ fontWeight:'700' }}>+1 cerveja</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCervejas(c=>Math.max(0,c-1))} style={{ padding:10, backgroundColor:'#ff6b6b', borderRadius:8 }}>
          <Text style={{ fontWeight:'700' }}>-1 cerveja</Text>
        </TouchableOpacity>
      </View>

      <Text style={[global.smallText, { marginTop:20 }]}>Humor do cliente: {humor}</Text>
    </View>
  );
}
