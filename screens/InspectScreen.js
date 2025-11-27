import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔍 Inspect Tool</Text>
      <Text style={styles.subtitle}>Digite algo e veja ele ser analisado em tempo real!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite qualquer texto..."
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d0d0d',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00eaff',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#00eaff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

  resultBox: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },

  resultTitle: {
    color: '#00eaff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  resultItem: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },

  warning: {
    color: '#ff6666',
    fontSize: 16,
    textAlign: 'center',
  }
});
