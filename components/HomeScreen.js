import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function HomeScreen({ theme }){
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>Bem-vindo ao Boteco React Native 🍻</Text>
      <Text style={[styles.paragraph, { color: theme.text }]}>Este miniapp ensina conceitos de React Native usando analogias de bar e humor. Use as abas para navegar entre as salas do boteco — cada uma demonstra um conceito.</Text>

      <Text style={[styles.subTitle, { color: theme.accent }]}>O que você vai aprender</Text>
      <View style={styles.bulletList}>
        <Text style={[styles.bulletItem, { color: theme.text }]}>• useState</Text>
        <Text style={[styles.bulletItem, { color: theme.text }]}>• FlatList</Text>
        <Text style={[styles.bulletItem, { color: theme.text }]}>• fetch / APIs</Text>
        <Text style={[styles.bulletItem, { color: theme.text }]}>• Props e composição</Text>
        <Text style={[styles.bulletItem, { color: theme.text }]}>• Animated</Text>
      </View>
    </ScrollView>
  );
}
