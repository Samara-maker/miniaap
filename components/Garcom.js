import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

export default function CallWaiter({ theme, modoAprendiz }) {

  // 🔹 Estados principais da requisição
  const [loading, setLoading] = useState(false); // garçom foi buscar?
  const [data, setData] = useState(null);        // pedido chegou?
  const [error, setError] = useState(null);      // deu ruim?

  // 🍽️ Função que simula o garçom indo buscar dados
  async function fetchData() {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // ⏱️ simulando tempo da cozinha
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 🌐 chamada da API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

      if (!response.ok) {
        throw new Error('O garçom tropeçou no caminho 😵');
      }

      const json = await response.json();
      setData(json);

    } catch (err) {
      setError(err.message);
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
        Exemplo real de consumo de API no React Native.
      </Text>

      {/* 📚 MODO APRENDIZ — EXPLICAÇÃO CLARA */}
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

            {'\n\n'}1️⃣ <Text style={{ fontWeight: 'bold' }}>API</Text>  
            É um lugar na internet que entrega dados para o app.

            {'\n\n'}2️⃣ <Text style={{ fontWeight: 'bold' }}>loading</Text>  
            Fica `true` enquanto o garçom está buscando os dados.

            {'\n\n'}3️⃣ <Text style={{ fontWeight: 'bold' }}>data</Text>  
            Guarda a resposta quando o pedido chega com sucesso.

            {'\n\n'}4️⃣ <Text style={{ fontWeight: 'bold' }}>error</Text>  
            Mostra um erro se algo der errado no caminho.

            {'\n\n'}✅ <Text style={{ fontWeight: 'bold' }}>Resumo:</Text>  
            Apps reais sempre lidam com espera, sucesso e erro.
          </Text>
        </View>
      )}

      {/* 🔘 BOTÃO */}
      <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: theme.button }]}
        onPress={fetchData}
      >
        <Text style={styles.actionBtnText}>Chamar o Garçom</Text>
      </TouchableOpacity>

      {/* ⏳ LOADING */}
      {loading && (
        <View style={{ marginTop: 16 }}>
          <ActivityIndicator size="large" color={theme.primary} />
          <Text style={[styles.paragraph, { color: theme.text }]}>
            O garçom foi até a cozinha...
          </Text>
        </View>
      )}

      {/* ❌ ERRO */}
      {error && (
        <Text style={[styles.errorText, { color: 'crimson', marginTop: 16 }]}>
          Erro: {error}
        </Text>
      )}

      {/* ✅ SUCESSO */}
      {data && (
        <View style={[styles.apiCard, { borderColor: theme.border, marginTop: 16 }]}>
          <Text style={[styles.petiscoName, { color: theme.primary }]}>
            Pedido recebido:
          </Text>
          <Text style={[styles.petiscoDesc, { color: theme.text }]}>
            {data.title}
          </Text>
        </View>
      )}
    </View>
  );
}
