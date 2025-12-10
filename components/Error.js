import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function ErrorsScreen({ theme }){
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>Erros do Boteco 🚫</Text>
      <Text style={[styles.paragraph, { color: theme.text }]}>Erros comuns de iniciantes com explicações engraçadas.</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={[styles.subTitle, { color: theme.accent }]}>undefined is not an object</Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>\"Isso é igual pedir cerveja sem pagar. O React não deixa.\"</Text>

        <Text style={[styles.subTitle, { color: theme.accent, marginTop: 8 }]}>Hooks must be called inside a function component</Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>\"Você tentou pedir pro garçom fora do bar.\"</Text>
      </View>
    </View>
  );
}
