import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ItemConta({ nome, preco, qtd }) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{qtd} x {nome}</Text>
      <Text style={styles.price}>R$ {(preco * qtd).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, borderBottomWidth: 0.5, borderColor: "#ddd" },
  name: { fontSize: 16 },
  price: { fontWeight: "700" },
});
