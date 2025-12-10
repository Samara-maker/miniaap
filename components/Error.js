import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function ErrorsScreen({ theme }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>
        Erros do Boteco 🚫
      </Text>

      <Text style={[styles.paragraph, { color: theme.text }]}>
        Nem todo erro é culpa do React… às vezes é do dev 😅  
        (e tudo bem, faz parte do aprendizado).
      </Text>

      {/* ERRO 1 */}
      <View style={{ marginTop: 16 }}>
        <Text style={[styles.subTitle, { color: theme.accent }]}>
          ❌ undefined is not an object
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          👉 Você tentou usar algo que ainda não existe.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          🍺 No boteco: pediu cerveja sem nem ter pedido.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          😅 Verdade difícil: às vezes o erro é do usuário mesmo.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          ✅ Solução: confira se o state, props ou variável realmente existe.
        </Text>
      </View>

      {/* ERRO 2 */}
      <View style={{ marginTop: 16 }}>
        <Text style={[styles.subTitle, { color: theme.accent }]}>
          ❌ Hooks must be called inside a function component
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          👉 Hooks só funcionam dentro de componentes React.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          🍺 No boteco: tentou chamar o garçom pelo WhatsApp.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          🤦‍♂️ O React fica confuso… e com razão.
        </Text>

        <Text style={[styles.paragraph, { color: theme.text }]}>
          ✅ Solução: use <Text style={{ fontStyle: 'italic' }}>useState</Text> e{' '}
          <Text style={{ fontStyle: 'italic' }}>useEffect</Text> apenas dentro de
          componentes.
        </Text>
      </View>

      {/* VERDADE UNIVERSAL */}
      <View
        style={{
          marginTop: 20,
          padding: 12,
          borderRadius: 8,
          backgroundColor: theme.cardBg,
        }}
      >
        <Text style={[styles.paragraph, { color: theme.text }]}>
          ☕ Regra universal do dev:
          {'\n'}90% dos bugs somem depois de:
          {'\n'}• ler o erro com calma  
          {'\n'}• conferir o código  
          {'\n'}• reiniciar o app 😅
        </Text>
      </View>
    </View>
  );
}
