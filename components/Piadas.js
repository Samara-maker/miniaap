import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';
import { fetchJoke } from '../api/api';

export default function PiadasScreen({ theme }) {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function carregarPiada() {
    try {
      setLoading(true);
      setError(null);

      const resultado = await fetchJoke();
      setJoke(resultado);

    } catch (err) {
      setError('Erro ao acessar a API 😵');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>
        Piadas da API 😂
      </Text>

      {loading && <ActivityIndicator size="large" color={theme.primary} />}

      {joke && (
        <Text style={[styles.paragraph, { color: theme.text }]}>
          {joke}
        </Text>
      )}

      {error && (
        <Text style={{ color: 'crimson', marginVertical: 10 }}>
          {error}
        </Text>
      )}

      <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: theme.button }]}
        onPress={carregarPiada}
      >
        <Text style={styles.actionBtnText}>Buscar piada</Text>
      </TouchableOpacity>
    </View>
  );
}
