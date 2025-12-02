import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import global from "../styles/global";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>App React Native de Boteco 🍻</Text>

      <Text style={{ marginBottom: 8 }}>
        Navegue pelas abas para aprender conceitos do React Native com humor de bar.
      </Text>

      <Button title="Boteco do useState" onPress={() => navigation.navigate("useState")} />
      <View style={{ height: 8 }} />
      <Button title="Boteco do JSX" onPress={() => navigation.navigate("JSX")} />
      <View style={{ height: 8 }} />
      <Button title="Boteco da Estilização" onPress={() => navigation.navigate("Estilos")} />
      <View style={{ height: 8 }} />
      <Button title="Garçom Online (API)" onPress={() => navigation.navigate("Garcom")} />
      <View style={{ height: 8 }} />
      <Button title="Petiscos (FlatList)" onPress={() => navigation.navigate("Petiscos")} />
      <View style={{ height: 8 }} />
      <Button title="Simulador de Conta" onPress={() => navigation.navigate("Conta")} />
      <View style={{ height: 8 }} />
      <Button title="Escape do Fiado (Animated)" onPress={() => navigation.navigate("Escape")} />
      <View style={{ height: 8 }} />
      <Button title="Erros do Boteco (debug)" onPress={() => navigation.navigate("Erros")} />
      <View style={{ height: 8 }} />
      <Button title="Montar Meu Boteco" onPress={() => navigation.navigate("Montar")} />
      <View style={{ height: 8 }} />
      <Button title="Piadas do Boteco" onPress={() => navigation.navigate("Piadas")} />
      <View style={{ height: 8 }} />
      <Button title="Quiz — Dev ou Garçom?" onPress={() => navigation.navigate("Quiz")} />
    </ScrollView>
  );
}
