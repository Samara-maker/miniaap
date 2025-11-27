import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Card({ title, subtitle, style }) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#081126',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#123248',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  title: {
    color: '#e6eef8',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: '#9fb7d9',
    marginTop: 6,
  },
});