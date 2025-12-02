import React, { useRef, useEffect } from "react";
import { View, Animated, Text, Button } from "react-native";
import global from "../styles/global";

export default function EscapeFiado() {
  const x = useRef(new Animated.Value(0)).current;

  function runAnimation() {
    x.setValue(0);
    Animated.timing(x, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={global.container}>
      <Text style={global.title}>Escape do Fiado — Minijogo</Text>

      <View style={{ height: 200, overflow: "hidden", backgroundColor: "#fff", borderRadius: 8, marginVertical: 12 }}>
        <Animated.View style={{ transform: [{ translateX: x }], padding: 12 }}>
          <Text style={{ fontSize: 18 }}>🏃‍♂️ Corredor fugindo do fiado</Text>
        </Animated.View>
      </View>

      <Button title="Fugir!" onPress={runAnimation} />
      <Text style={{ marginTop: 12 }}>Use Animated + timing + useRef + interpolação para melhorar.</Text>
    </View>
  );
}
