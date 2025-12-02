import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import global from "../styles/global";

export default function BotecoStyle() {
  const [tema, setTema] = useState("mesa1");

  const temas = {
    mesa1: { backgroundColor: "#FFF7E6", borderColor: "#8B5E3C", color: "#8B5E3C" }, // amarelo + marrom
    mesa2: { backgroundColor: "#2b0000", borderColor: "#8b0000", color: "#fff" }, // vermelho + preto
  };

  const pratos = [
    { nome: "Porção de Torresmo", preco: 18 },
    { nome: "Batata Frita", preco: 12 },
    { nome: "Calabresa Acebolada", preco: 20 },
  ];

  const styleTema = temas[tema];

  return (
    <View style={[global.container, { backgroundColor: styleTema.backgroundColor }]}>
      <Text style={[global.title, { color: styleTema.color }]}>Menu do Boteco</Text>

      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <TouchableOpacity onPress={() => setTema("mesa1")} style={{ marginRight: 8 }}>
          <Text style={{ padding: 8, borderWidth: 1, borderColor: styleTema.borderColor, color: styleTema.color }}>🍺 Tema Mesa 01</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTema("mesa2")}>
          <Text style={{ padding: 8, borderWidth: 1, borderColor: styleTema.borderColor, color: styleTema.color }}>🍻 Tema Mesa 02</Text>
        </TouchableOpacity>
      </View>

      {pratos.map(p => (
        <View key={p.nome} style={{ padding: 12, backgroundColor: "#fff", marginBottom: 8, borderRadius: 8 }}>
          <Text style={{ fontWeight: "700" }}>{p.nome}</Text>
          <Text style={{ color: "#666" }}>R$ {p.preco.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}
