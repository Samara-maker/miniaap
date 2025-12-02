import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import global from '../styles/global';

export default function MontarBoteco(){
  const [nome, setNome] = useState('Bar do useEffect');
  const [corMesa, setCorMesa] = useState('#6b3e00');
  const [musica, setMusica] = useState('Sertanejo');

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Montar Meu Boteco</Text>

      <Text style={[global.textLight, { marginTop:12 }]}>Nome do Boteco</Text>
      <TextInput value={nome} onChangeText={setNome} style={{ backgroundColor:'#081126', color:'#fff', padding:8, borderRadius:8, marginTop:8 }} />

      <Text style={[global.textLight, { marginTop:12 }]}>Cor da Mesa (hex)</Text>
      <TextInput value={corMesa} onChangeText={setCorMesa} style={{ backgroundColor:'#081126', color:'#fff', padding:8, borderRadius:8, marginTop:8 }} />

      <Text style={[global.textLight, { marginTop:12 }]}>Música</Text>
      <TextInput value={musica} onChangeText={setMusica} style={{ backgroundColor:'#081126', color:'#fff', padding:8, borderRadius:8, marginTop:8 }} />

      <View style={{ marginTop:20, padding:12, borderRadius:8, backgroundColor: corMesa }}>
        <Text style={{ fontSize:20, fontWeight:'700' }}>{nome}</Text>
        <Text>🎵 {musica}</Text>
      </View>
    </View>
  );
}
