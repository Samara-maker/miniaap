import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JSXLabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍻 Boteco do JSX</Text>

      <Text style={styles.text}>
        JSX é como o cardápio do boteco: você descreve o que deve aparecer na mesa.
      </Text>

      <Text style={[styles.card, styles.text]}>
        {'<'}View{'> ... </'}View{'>'}  
        {'<'}Text{'>Cervejinha gelada!</'}Text{'>'}
      </Text>

      <Text style={styles.text}>
        Ele deixa você escrever layouts de forma simples, misturando lógica com UI.
      </Text>

      <View style={styles.example}>
        <Text style={styles.exampleText}>Exemplo renderizado:</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>🍺 Uma gelada bem servida</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f1724' },
  title: { color: '#ffd166', fontSize: 26, fontWeight: '700', marginBottom: 12 },
  text: { color: '#ffffff', fontSize: 16, marginVertical: 6 },
  card: {
    backgroundColor: '#1f2937',
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    fontFamily: 'monospace',
  },
  example: { marginTop: 20 },
  exampleText: { color: '#cbd5e1', marginBottom: 6 },
  box: {
    padding: 14,
    backgroundColor: '#172554',
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: { color: '#e0f2fe', fontSize: 18 },
});
