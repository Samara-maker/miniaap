import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import global from "../styles/global";
import { fetchOrder } from "../api/api";

export default function GarcomScreen() {
  const [loading, setLoading] = useState(false);
  const [pedido, setPedido] = useState(null);
  const [msg, setMsg] = useState("");

  async function chamarGarcom() {
    setLoading(true);
    setMsg("Calma chefia, o garçom foi lá pegar os dados!");
    try {
      const data = await fetchOrder();
      // jsonplaceholder post tem title e body
      setPedido({ nome: data.title, descricao: data.body });
    } catch (e) {
      setMsg("Ops, o garçom se perdeu no caminho.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={global.container}>
      <Text style={global.title}>Garçom Online — APIs</Text>
      <Button title="Chamar o Garçom" onPress={chamarGarcom} />
      <View style={{ height: 12 }} />
      {loading && <ActivityIndicator size="large" />}
      {msg ? <Text style={{ marginTop: 12 }}>{msg}</Text> : null}
      {pedido && (
        <View style={{ marginTop: 12, padding: 12, backgroundColor: "#fff", borderRadius: 8 }}>
          <Text style={{ fontWeight: "700" }}>{pedido.nome}</Text>
          <Text style={{ marginTop: 6 }}>{pedido.descricao}</Text>
        </View>
      )}
    </View>
  );
}
