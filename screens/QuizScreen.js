import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import global from '../styles/global';

const Q = [
  { q:'O que é uma prop?', a:'Um valor passado para um componente.' },
  { q:'Para que serve useState?', a:'Gerenciar estado local de um componente.' }
];

export default function QuizScreen(){
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  function next(){ setI((i+1)%Q.length); setShow(false); }

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Quiz — Dev ou Garçom?</Text>
      <Text style={[global.textLight, { marginTop:12 }]}>{Q[i].q}</Text>
      {show && <Text style={{ color:'#9fb7d9', marginTop:12 }}>{Q[i].a}</Text>}
      <View style={{ marginTop:12 }}>
        <Button title="Mostrar resposta" onPress={() => setShow(true)} />
        <View style={{ height:8 }} />
        <Button title="Próxima" onPress={next} />
      </View>
    </View>
  );
}
