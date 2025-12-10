import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

export default function CallWaiter({ theme, modoAprendiz }) {

  // 🧠 Estados da API
  const [loading, setLoading] = useState(false); // garçom foi buscar?
  const [data, setData] = useState(null);        // pedido chegou?
  const [error, setError] = useState(null);      // deu ruim?

  // 🍽️ Função que consome a API
  async function fetchData() {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // ⏱️ tempo da cozinha (simulação)
      await new Promise(resolve => setTimeout(resolve, 1200));

      // 🌐 API de testes (dados simulados)
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      if (!response.ok) {
        throw new Error('O garçom se perdeu no caminho 😵');
      }

      const json = await response.json();
      setData(json);

    } catch (err) {
      setError(err.message || 'Erro inesperado 🍺');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.screenContainer}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Chamar o Garçom 🍺
      </Text>

      <Text style={[styles.paragraph, { color: theme.text }]}>
        Exemplo prático de consumo de API no React Native.
      </Text>

      {/* 📚 MODO APRENDIZ */}
      {modoAprendiz && (
        <View
          style={{
            backgroundColor: theme.cardBg,
            borderLeftWidth: 5,
            borderLeftColor: theme.primary,
            padding: 12,
            borderRadius: 8,
            marginVertical: 12,
          }}
        >
          <Text style={{ fontSize: 13, color: theme.text, lineHeight: 18 }}>
            🧠 <Text style={{ fontWeight: 'bold' }}>O que essa tela ensina?</Text>

            {'\n\n'}✅ <Text style={{ fontWeight: 'bold' }}>API</Text>  
            O app busca dados fora dele, pela internet.

            {'\n\n'}✅ <Text style={{ fontWeight: 'bold' }}>Estados</Text>  
            loading → esperando  
            {'\n'}data → sucesso  
            {'\n'}error → erro

            {'\n\n'}🍺 <Text style={{ fontWeight: 'bold' }}>No boteco:</Text>  
            Às vezes o garçom demora. Às vezes a cozinha erra.
          </Text>
        </View>
      )}

      {/* 🔘 BOTÃO */}
      <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: theme.button }]}
        onPress={fetchData}
      >
        <Text style={styles.actionBtnText}>
          Chamar o Garçom
        </Text>
      </TouchableOpacity>

      {/* ⏳ LOADING */}
      {loading && (
        <View style={{ marginTop: 16 }}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.paragraph, { color: theme.text }]}>
            🏃‍♂️ O garçom foi até a cozinha...
          </Text>
        </View>
      )}

      {/* ❌ ERRO */}
      {error && (
        <Text style={[styles.errorText, { color: 'crimson', marginTop: 16 }]}>
          ❌ {error}
        </Text>
      )}

      {/* ✅ SUCESSO */}
      {data && (
        <View
          style={[
            styles.apiCard,
            { borderColor: theme.border, marginTop: 16 },
          ]}
        >
          <Text style={[styles.petiscoName, { color: theme.primary }]}>
            🍽️ Pedido recebido!
          </Text>

          <Text style={[styles.petiscoDesc, { color: theme.text }]}>
            {data.title}
          </Text>

          {/* ⚠️ AVISO IMPORTANTE */}
          <Text style={{ fontSize: 12, color: theme.text, opacity: 0.7, marginTop: 6 }}>
            ⚠️ Texto vindo de uma API de testes (dados simulados).
            {'\n'}O foco aqui é aprender a usar APIs, não o conteúdo.
          </Text>
        </View>
      )}
    </View>
  );
}
