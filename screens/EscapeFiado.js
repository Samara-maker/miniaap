import React, { useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import global from '../styles/global';

export default function EscapeFiado(){
  const x = useRef(new Animated.Value(0)).current;

  function run(){
    x.setValue(0);
    Animated.timing(x, { toValue: 300, duration: 1200, useNativeDriver: true }).start();
  }

  return (
    <View style={global.page}>
      <Text style={global.titleLight}>Escape do Fiado</Text>
      <Text style={[global.textLight, { marginTop:8 }]}>Ajude o personagem a fugir do dono do bar!</Text>

      <View style={{ marginTop:20, height:120, overflow:'hidden' }}>
        <Animated.View style={{ transform:[{ translateX: x }], width:80, height:80, backgroundColor:'#0ea5e9', borderRadius:40, justifyContent:'center', alignItems:'center' }}>
          <Text style={{ fontSize:28 }}>🏃‍♂️</Text>
        </Animated.View>
      </View>

      <TouchableOpacity onPress={run} style={{ marginTop:20, backgroundColor:'#0ea5e9', padding:10, borderRadius:8 }}>
        <Text style={{ fontWeight:'700' }}>Correr</Text>
      </TouchableOpacity>
    </View>
  );
}
