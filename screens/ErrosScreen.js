import React from 'react';
import { View, Text } from 'react-native';
import global from '../styles/global';

const ERROS = [
  { err:'undefined is not an object', explain:'Isso é igual pedir cerveja sem pagar. O React não deixa.' },
  { err:'Hooks must be called inside a function component', explain:'Você tentou chamar hook no lugar errado — chame dentro do componente.' },
  { err:'Invariant violation: Element type is invalid', explain:'Normalmente você esqueceu de exportar o componente.' },
];

export default function ErrosScreen(){
  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Erros do Boteco</Text>
      <View style={{ marginTop:12 }}>
        {ERROS.map((e,i) => (
          <View key={i} style={{ marginBottom:12, padding:12, backgroundColor:'#081126', borderRadius:8 }}>
            <Text style={{ color:'#ff6b6b', fontWeight:'700' }}>{e.err}</Text>
            <Text style={{ color:'#cfe6ff', marginTop:6 }}>{e.explain}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
