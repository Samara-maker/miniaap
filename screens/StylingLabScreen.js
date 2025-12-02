import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StylingLabScreen() {
  const [tema, setTema] = useState("mesa1");

  const temaMesa1 = { backgroundColor: '#fbbf24' };
  const temaMesa2 = { backgroundColor: '#dc2626' };

  return (
    <View style={[styles.container, tema === "mesa1" ? temaMesa1 : temaMesa2]}>
      <Text style={styles.title}>🎨 Boteco da Estilização</Text>
      <Text style={styles.text}>Troque o tema do ambiente:</Text>

      <Button title="Mesa 01" onPress={() => setTema('mesa1')} />
      <Button title="Mesa 02" onPress={() => setTema('mesa2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: '#ffffff', fontSize: 26, fontWeight: '700', marginBottom: 12 },
  text: { color: '#ffffff', fontSize: 16, marginVertical: 10 },
});
