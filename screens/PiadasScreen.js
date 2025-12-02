import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import global from '../styles/global';

export default function PiadasScreen(){
  const [loading, setLoading] = useState(false);
  const [piada, setPiada] = useState(null);

  async function buscarPiada(){
    setLoading(true);
    setPiada(null);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
      const json = await res.json();
      setPiada(json[0]);
    } catch(e){
      setPiada({ setup:'Ops', punchline:'Não achei piada, o garçom perdeu a graça.'});
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Piadas do Boteco</Text>
      <View style={{ marginTop:12 }}>
        <Button title="Buscar piada" onPress={buscarPiada} />
      </View>

      {loading && <ActivityIndicator style={{ marginTop:12 }} />}

      {piada && (
        <View style={{ marginTop:12, padding:12, backgroundColor:'#081126', borderRadius:8 }}>
          <Text style={{ color:'#cfe6ff', fontWeight:'700' }}>{piada.setup}</Text>
          <Text style={{ color:'#9fb7d9', marginTop:8 }}>{piada.punchline}</Text>
        </View>
      )}
    </View>
  );
}
