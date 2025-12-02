import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import global from "../styles/global";
import BeerCounter from "../components/BeerCounter";

export default function BotecoUseState() {
  const [count, setCount] = useState(0);
  const [humor, setHumor] = useState("Sóbrio");

  useEffect(() => {
    if (count <= 2) setHumor("Sóbrio");
    else if (count <= 4) setHumor("Alegrinho");
    else if (count <= 6) setHumor("Filosofando");
    else setHumor("Mandando áudio de 3 minutos");
  }, [count]);

  return (
    <View style={global.container}>
      <Text style={global.title}>Boteco do useState</Text>

      <BeerCounter count={count} setCount={setCount} />

      <Text style={{ marginTop: 12, fontSize: 16 }}>
        Humor atual: <Text style={{ fontWeight: "700" }}>{humor}</Text>
      </Text>

      <Text style={{ marginTop: 12, color: "#444" }}>
        Metáfora: o contador representa o nível da sua cerveja no copo — ele é o <Text style={{ fontWeight: "700" }}>estado</Text>.
      </Text>
    </View>
  );
}
