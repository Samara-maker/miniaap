import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import global from "../styles/global";
import { fetchJoke } from "../api/api";

export default function PiadasScreen() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getJoke() {
    setLoading(true);
    try {
      const data = await fetchJoke();
      if (data && data.joke) setJoke(data.joke);
      else if (data && data.setup) setJoke(`${data.setup} — ${data.delivery}`);
      else setJoke("Sem piada no momento.");
    } catch {
      setJoke("Erro ao buscar piada.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={global.container}>
      <Text style={global.title}>Piadas do Boteco</Text>
      <Button title="Me conta uma piada nerd" onPress={getJoke} />
      <View style={{ height: 12 }} />
      {loading ? <ActivityIndicator /> : <Text>{joke}</Text>}
    </View>
  );
}
