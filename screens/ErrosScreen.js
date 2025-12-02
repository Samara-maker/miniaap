import React from "react";
import { View, Text, ScrollView } from "react-native";
import global from "../styles/global";

const ERROS = [
  { err: "undefined is not an object", exp: "Isso é igual pedir cerveja sem pagar. O React não deixa." },
  { err: "Hooks must be called inside a function component", exp: "Você tentou pedir pro garçom errado." },
  { err: "Invariant Violation: Element type is invalid", exp: "Elemento inválido — tipo pedir uma janta que não existe." },
];

export default function ErrosScreen() {
  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>Erros do Boteco (debug)</Text>
      {ERROS.map(e => (
        <View key={e.err} style={{ padding: 12, backgroundColor: "#fff", borderRadius: 8, marginBottom: 8 }}>
          <Text style={{ fontWeight: "700" }}>{e.err}</Text>
          <Text style={{ marginTop: 6 }}>{e.exp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
