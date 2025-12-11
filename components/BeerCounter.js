import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function BeerCounter({ theme, modoAprendiz }) {
  const [count, setCount] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(0);

  /**
   * 🧠 useEffect
   * Esse efeito é executado TODA VEZ que o estado "count" muda.
   * Aqui usamos ele para reagir ao aumento das cervejas
   * e escurecer gradualmente a tela.
   */
  useEffect(() => {
    /**
     * Cada cerveja aumenta a opacidade do fundo.
     * count * 0.12 → quanto mais cervejas, mais escuro
     * Math.min → impede que fique totalmente preto
     */
    const opacityLevel = Math.min(count * 0.12, 0.85);
    setBgOpacity(opacityLevel);
  }, [count]); // 👈 dependência: reage às mudanças do estado

  return (
  <View style={{ flex: 1 }}>
    {/* 🌑 CAMADA DE ESCURECIMENTO (overlay) */}
    <View
      pointerEvents="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: bgOpacity,
        zIndex: 1,
      }}
    />

    {/* 📄 CONTEÚDO */}
    <View
      style={[
        styles.screenContainer,
        {
          flex: 1,
          zIndex: 2,
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.primary }]}>
        Contador de Cerveja 🍺
      </Text>

      <Text style={[styles.paragraph, { color: theme.text }]}>
        Exemplo visual de useState + useEffect.
      </Text>

      {/* 📚 MODO APRENDIZ — EXPLICAÇÃO NO PRÓPRIO APP */}
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
            🧠 <Text style={{ fontWeight: 'bold' }}>Por que a tela escurece inteira?</Text>

            {'\n\n'}• Criamos uma <Text style={{ fontWeight: 'bold' }}>camada absoluta</Text> que cobre a tela inteira.
            {'\n'}• Essa camada reage ao <Text style={{ fontWeight: 'bold' }}>estado count</Text>.
            {'\n'}• Quanto maior o estado, maior a opacidade.

            {'\n\n'}✅ Isso mostra claramente:
            {'\n'}→ Estado
            {'\n'}→ Efeito colateral
            {'\n'}→ Interface reagindo
          </Text>
        </View>
      )}

      <View style={styles.counterBox}>
        <TouchableOpacity
          style={[styles.counterBtn, { backgroundColor: theme.button }]}
          onPress={() => setCount(c => Math.max(0, c - 1))}
        >
          <Text style={styles.counterBtnText}>-1</Text>
        </TouchableOpacity>

        <Text style={[styles.counterValue, { color: theme.text }]}>
          {count} {count === 1 ? 'cerveja' : 'cervejas'}
        </Text>

        <TouchableOpacity
          style={[styles.counterBtn, { backgroundColor: theme.button }]}
          onPress={() => setCount(c => c + 1)}
        >
          <Text style={styles.counterBtnText}>+1</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.humorText, { color: theme.accent }]}>
        {count <= 2
          ? 'Sóbrio ✅'
          : count <= 4
          ? 'Alegrinho 😄'
          : count <= 6
          ? 'Filosofando 🍃'
          : 'Apagando aos poucos 🥴'}
      </Text>
    </View>
  </View>
);
}