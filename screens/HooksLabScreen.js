import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HooksLabScreen() {
  const [cervejas, setCervejas] = useState(0);
  const [humor, setHumor] = useState("Sóbrio");

  useEffect(() => {
    if (cervejas <= 2) setHumor("Sóbrio");
    else if (cervejas <= 4) setHumor("Alegrinho");
    else if (cervejas <= 6) setHumor("Filosofando");
    else setHumor("Mandando áudio de 3 minutos");
  }, [cervejas]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍺 Boteco do useState</Text>

      <Text style={styles.text}>Cervejas tomadas: {cervejas}</Text>
      <Text style={styles.text}>Humor atual: {humor}</Text>

      <Button title="+1 Cerveja" onPress={() => setCervejas(cervejas + 1)} />
      <Button title="-1 Cerveja" onPress={() => setCervejas(Math.max(0, cervejas - 1))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f1724' },
  title: { color: '#ffd166', fontSize: 26, fontWeight: '700', marginBottom: 12 },
  text: { color: '#ffffff', fontSize: 18, marginVertical: 10 },
});
