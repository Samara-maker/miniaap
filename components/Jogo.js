import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function EscapeGame({ theme, modoAprendiz }) {
  const position = useRef(new Animated.Value(0)).current;

  const [speed, setSpeed] = useState(1);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let mounted = true;

    function loop() {
      if (!mounted) return;

      Animated.timing(position, {
        toValue: 300,
        duration: 4000 / speed,
        useNativeDriver: true,
      }).start(() => {
        position.setValue(0);
        if (mounted && running) loop();
      });
    }

    if (running) loop();
    return () => (mounted = false);
  }, [running, speed]);

  function acelerar() {
    if (modoAprendiz && speed >= 2) return;
    setSpeed(s => s + 0.5);
  }

  return (
    <View style={styles.screenContainer}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Escape do Fiado 🏃‍♂️
      </Text>

      <Text style={[styles.paragraph, { color: theme.text }]}>
        Exemplo de animação e controle de estado no React Native.
      </Text>

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
            🧠 <Text style={{ fontWeight: 'bold' }}>
              O que essa tela ensina?
            </Text>

            {'\n\n'}1️⃣ <Text style={{ fontWeight: 'bold' }}>Animated</Text>  
            Controla a movimentação do personagem na tela.

            {'\n\n'}2️⃣ <Text style={{ fontWeight: 'bold' }}>useRef</Text>  
            Mantém o valor da animação sem causar re-render.

            {'\n\n'}3️⃣ <Text style={{ fontWeight: 'bold' }}>useEffect</Text>  
            Cria e controla o loop da animação.

            {'\n\n'}4️⃣ <Text style={{ fontWeight: 'bold' }}>useState</Text>  
            Controla velocidade e execução do jogo.

            {'\n\n'}✅ <Text style={{ fontWeight: 'bold' }}>Resumo:</Text>  
            Jogos simples já usam conceitos reais de apps profissionais.
          </Text>
        </View>
      )}
  
      {/* ÁREA DO JOGO */}
      <View style={{ width: '100%', height: 120, overflow: 'hidden', marginVertical: 12 }}>
        <Animated.View
          style={{
            transform: [{ translateX: position }],
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={[styles.character, { backgroundColor: theme.primary }]}> 
            <Text style={{ color: '#fff' }}>😅</Text>
          </View>
          <View style={[styles.character, { backgroundColor: '#444' }]}>
            <Text style={{ color: '#fff' }}>🐶</Text>
          </View>
          <View style={[styles.character, { backgroundColor: '#888' }]}>
            <Text style={{ color: '#fff' }}>🍺</Text>
          </View>
        </Animated.View>
      </View>

      {/* CONTROLES */}
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity
          style={[styles.smallAction, { backgroundColor: theme.button }]}
          onPress={() => setRunning(r => !r)}
        >
          <Text style={{ color: '#fff' }}>
            {running ? 'Parar' : 'Correr'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.smallAction, { backgroundColor: theme.button }]}
          onPress={acelerar}
        >
          <Text style={{ color: '#fff' }}>Acelerar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.smallAction, { backgroundColor: 'crimson' }]}
          onPress={() => {
            setSpeed(1);
            setRunning(false);
          }}
        >
          <Text style={{ color: '#fff' }}>Reset</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
