import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function BeerCounter({ count, setCount }) {
  useEffect(() => {
    // efeito de exemplo: nada demais, só console log
    console.log("Nível de cerveja:", count);
  }, [count]);

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Nível de Cerveja: {count} 🍺</Text>
      <View style={styles.row}>
        <Button title="+1 cerveja" onPress={() => setCount(c => c + 1)} />
        <View style={{ width: 12 }} />
        <Button title="-1 cerveja" onPress={() => setCount(c => Math.max(0, c - 1))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 12, backgroundColor: "#fff", borderRadius: 8, marginVertical: 8 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between" },
});
