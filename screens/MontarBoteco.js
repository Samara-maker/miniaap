import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import global from "../styles/global";

const nomesExemplo = ["Bar do useEffect", "Zé do Estado Instável", "Boteco das Props Perdidas"];

export default function MontarBoteco() {
  const [nome, setNome] = useState(nomesExemplo[0]);
  const [cor, setCor] = useState("#ffcc00");
  const [musica, setMusica] = useState("Sertanejo leve");

  function randomName() {
    setNome(nomesExemplo[Math.floor(Math.random() * nomesExemplo.length)]);
  }

  return (
    <View style={[global.container, { backgroundColor: cor }]}>
      <Text style={global.title}>Montar Meu Boteco</Text>

      <Text>Nome do boteco</Text>
      <TextInput value={nome} onChangeText={setNome} style={{ backgroundColor: "#fff", padding: 8, borderRadius: 8, marginVertical: 8 }} />

      <Text>Música ambiente</Text>
      <TextInput value={musica} onChangeText={setMusica} style={{ backgroundColor: "#fff", padding: 8, borderRadius: 8, marginVertical: 8 }} />

      <Text>Cor das mesas (hex)</Text>
      <TextInput value={cor} onChangeText={setCor} style={{ backgroundColor: "#fff", padding: 8, borderRadius: 8, marginVertical: 8 }} />

      <Button title="Gerar nome aleatório" onPress={randomName} />
      <View style={{ height: 8 }} />
      <Text style={{ marginTop: 12 }}>Preview: <Text style={{ fontWeight: "700" }}>{nome}</Text> — {musica}</Text>
    </View>
  );
}
