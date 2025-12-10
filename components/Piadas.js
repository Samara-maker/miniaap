import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const PIADAS = [
  'Por que o JavaScript levou um fora? Porque era muito *callback*!',
  'UseState e UseEffect entraram num bar. UseState disse: "Me atualiza"',
  'Qual o drink favorito do dev? O "Stack Overflow".'
];

export default function PiadasScreen({ theme }){
  const [idx, setIdx] = useState(0);
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>Piadas do Boteco 😂</Text>
      <Text style={[styles.paragraph, { color: theme.text }]}>{PIADAS[idx]}</Text>

      <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.button }]} onPress={()=> setIdx((i)=> (i+1) % PIADAS.length)}>
        <Text style={styles.actionBtnText}>Próxima Piada</Text>
      </TouchableOpacity>
    </View>
  );
}
