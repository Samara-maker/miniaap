import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HooksScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hook useState</Text>
      <Text style={styles.text}>
        Hooks permitem adicionar lógica reativa a componentes.
      </Text>

      <Text style={styles.counter}>Contador: {count}</Text>

      <Button title="Aumentar" onPress={() => setCount(count + 1)} />
      <Button title="Diminuir" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  text: { fontSize: 16, marginVertical: 10 },
  counter: { fontSize: 32, textAlign: "center", marginVertical: 20 },
});
