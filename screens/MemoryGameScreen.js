import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MemoryCard from '../components/MemoryCard';
import global from '../styles/global';

const EMOJIS = ["🐶", "🐱", "🦊", "🐻"];

export default function MemoryGameScreen() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const double = [...EMOJIS, ...EMOJIS]
      .map(item => ({ icon: item, id: Math.random().toString(36).slice(2), flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);

    setCards(double);
    setSelected([]);
    setMatched(0);
  }

  function flipCard(card) {
    if (selected.length === 2) return;
    if (card.flipped || card.matched) return;

    const updated = cards.map(c =>
      c.id === card.id ? { ...c, flipped: true } : c
    );

    setCards(updated);
    setSelected(prev => [...prev, card]);
  }

  useEffect(() => {
    if (selected.length === 2) {
      const [c1, c2] = selected;
      if (c1.icon === c2.icon) {
        const updated = cards.map(c =>
          (c.id === c1.id || c.id === c2.id)
            ? { ...c, matched: true }
            : c
        );
        setCards(updated);
        setMatched(m => m + 1);
        setSelected([]);
      } else {
        setTimeout(() => {
          const updated = cards.map(c =>
            (c.id === c1.id || c.id === c2.id)
              ? { ...c, flipped: false }
              : c
          );
          setCards(updated);
          setSelected([]);
        }, 700);
      }
    }
  }, [selected]);

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Jogo da Memória</Text>
      <Text style={[global.textLight, { marginTop:6 }]}>Encontre todos os pares!</Text>

      <View style={styles.grid}>
        {cards.map(card => (
          <MemoryCard key={card.id} data={card} onPress={() => flipCard(card)} />
        ))}
      </View>

      <TouchableOpacity onPress={resetGame} style={styles.button}>
        <Text style={styles.buttonText}>Reiniciar jogo</Text>
      </TouchableOpacity>

      {matched === EMOJIS.length && <Text style={styles.winText}>🎉 Você venceu! 🎉</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { marginTop:16, width:'100%', flexDirection:'row', flexWrap:'wrap', justifyContent:'center' },
  button: { backgroundColor:'#0ea5e9', marginTop:20, paddingHorizontal:20, paddingVertical:10, borderRadius:8 },
  buttonText: { color:'#fff', fontWeight:'700', fontSize:16 },
  winText: { marginTop:20, color:'#38bdf8', fontSize:18, fontWeight:'700' }
});
