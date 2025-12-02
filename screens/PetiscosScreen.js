import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function PetiscosScreen() {
  const petiscos = [
    { id: '1', nome: 'Bolinha de Queijo', desc: 'Aumenta +5 de felicidade' },
    { id: '2', nome: 'Torresmo', desc: '+10 XP de alegria' },
    { id: '3', nome: 'Batata Frita', desc: 'Acompanha fofoca grátis' },
    { id: '4', nome: 'Calabresa Acebolada', desc: 'Buff +15 em carisma' },
    { id: '5', nome: 'Pastel de Carne', desc: 'Aumenta resistência a cerveja' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Petiscos do Boteco</Text>

      <FlatList
        data={petiscos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFDCA8',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#A66E2A',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A2E0F',
  },
  cardDesc: {
    fontSize: 14,
    color: '#5A2E0F',
    marginTop: 5,
  },
});
