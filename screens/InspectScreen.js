import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import global from '../styles/global';

export default function InspectScreen() {
  const [inputValue, setInputValue] = useState('');
  const [inspected, setInspected] = useState(null);

  function handleInspect() {
    if (!inputValue.trim()) {
      setInspected("Digite algo para inspecionar.");
      return;
    }

    const result = {
      length: inputValue.length,
      upper: inputValue.toUpperCase(),
      lower: inputValue.toLowerCase(),
      reversed: inputValue.split("").reverse().join(""),
    };

    setInspected(result);
  }

  return (
    <ScrollView style={global.page}>
      <Text style={global.titleLight}>🔍 Inspect Tool</Text>
      <Text style={[global.textLight, { marginTop:6 }]}>Digite algo e veja ele ser analisado em tempo real!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite qualquer texto..."
        placeholderTextColor="#9fb7d9"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity style={styles.button} onPress={handleInspect}>
        <Text style={styles.buttonText}>Inspecionar</Text>
      </TouchableOpacity>

      {inspected && (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Resultados da Inspeção:</Text>

          {typeof inspected === 'string' ? (
            <Text style={styles.warning}>{inspected}</Text>
          ) : (
            <>
              <Text style={styles.resultItem}>📏 Tamanho: {inspected.length}</Text>
              <Text style={styles.resultItem}>🔠 Maiúsculas: {inspected.upper}</Text>
              <Text style={styles.resultItem}>🔡 Minúsculas: {inspected.lower}</Text>
              <Text style={styles.resultItem}>🔄 Reverso: {inspected.reversed}</Text>
            </>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#00eaff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: { color: '#000', fontWeight: '700' },
  resultBox: { backgroundColor: '#1c1c1c', padding: 14, borderRadius: 10, marginTop: 14 },
  resultTitle: { color: '#00eaff', fontSize: 18, fontWeight: '700', marginBottom: 8 },
  resultItem: { color: '#fff', marginBottom: 6 },
  warning: { color: '#ff6666' }
});
