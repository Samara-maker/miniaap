import React from "react";
import { View, Text } from "react-native";
import global from "../styles/global";

export default function BotecoJSX() {
  const element = <Text>JSX é como escrever o cardápio dentro do JavaScript.</Text>;

  return (
    <View style={global.container}>
      <Text style={global.title}>Boteco do JSX</Text>
      <View style={{ padding: 12, backgroundColor: "#fff", borderRadius: 8 }}>
        {element}
        <Text style={{ marginTop: 8 }}>
          Exemplo: <Text style={{ fontWeight: "700" }}>{`const elemento = <Text>Olá</Text>`}</Text>
        </Text>
      </View>
    </View>
  );
}
