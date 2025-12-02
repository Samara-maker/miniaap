import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import global from "../styles/global";

const questions = [
  { q: "O que é uma prop?", a: "Informação enviada para o componente" },
  { q: "O que é estado (state)?", a: "Dados que mudam com o tempo" },
  { q: "Qual hook usamos para estado?", a: "useState" },
];

export default function QuizScreen() {
  const [i, setI] = useState(0);
  const [msg, setMsg] = useState("");

  function answer(ans) {
    if (ans === questions[i].a) setMsg("✔ Acertou! Pode marcar mais uma cerveja aí.");
    else setMsg("❌ Errou! O garçom não aceita devolução.");
    const next = i + 1;
    setTimeout(() => {
      if (next < questions.length) {
        setI(next);
        setMsg("");
      } else {
        setMsg("Fim do Quiz! Volte para revisar os módulos.");
      }
    }, 900);
  }

  return (
    <View style={global.container}>
      <Text style={global.title}>Quiz — Dev ou Garçom?</Text>
      <Text style={{ marginBottom: 12, fontWeight: "700" }}>{questions[i].q}</Text>

      <Button title={questions[i].a} onPress={() => answer(questions[i].a)} />
      <View style={{ height: 8 }} />
      <Button title="Resposta engraçada 1" onPress={() => answer("no")} />
      <View style={{ height: 8 }} />
      <Button title="Resposta engraçada 2" onPress={() => answer("nao")} />

      <View style={{ marginTop: 12 }}>
        <Text>{msg}</Text>
      </View>
    </View>
  );
}
