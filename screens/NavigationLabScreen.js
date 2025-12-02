import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NavigationLabScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍟 Boteco da Navegação</Text>

      <Text style={styles.text}>
        Navegar é como mudar de mesa no boteco. Mesma festa, outra visão.
      </Text>

      <Button title="Ir para outra mesa" onPress={() => navigation.navigate("JSXLab")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f1724' },
  title: { color: '#fca5a5', fontSize: 26, fontWeight: '700', marginBottom: 12 },
  text: { color: '#ffffff', fontSize: 16, marginVertical: 10 },
});
