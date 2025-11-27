import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function QuizScreen() {
  const questions = [
    { q: "O que é JSX?", a: "Uma forma de escrever estrutura de interface dentro do JS." },
    { q: "Para que serve useState?", a: "Criar estados reativos em componentes." },
  ];

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz React Native</Text>

      <Text style={styles.question}>{questions[index].q}</Text>

      {showAnswer && (
        <Text style={styles.answer}>{questions[index].a}</Text>
      )}

      <Button title="Mostrar resposta" onPress={() => setShowAnswer(true)} />
      <Button
        title="Próxima"
        onPress={() => {
          setIndex((index + 1) % questions.length);
          setShowAnswer(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  question: { marginVertical: 20, fontSize: 18 },
  answer: { marginVertical: 20, fontSize: 16, color: "green" },
});
