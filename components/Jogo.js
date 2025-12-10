import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function EscapeGame({ theme }){
  const position = useRef(new Animated.Value(0)).current;
  const [speed, setSpeed] = useState(1);
  const [running, setRunning] = useState(false);

  useEffect(()=>{
    let mounted = true;
    function loop(){
      if(!mounted) return;
      Animated.timing(position, { toValue: 300, duration: 4000 / speed, useNativeDriver: true }).start(()=>{
        position.setValue(0);
        if(mounted) loop();
      });
    }
    if(running) loop();
    return ()=> mounted = false;
  },[running, speed]);

  return (
    <View style={[styles.screenContainer, { alignItems: 'center' }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Escape do Fiado 🏃‍♂️</Text>
      <Text style={[styles.paragraph, { color: theme.text }]}>Toque para acelerar o personagem e fugir do fiado.</Text>

      <View style={{ width: '100%', height: 120, overflow: 'hidden', marginVertical: 12 }}>
        <Animated.View style={{ transform: [{ translateX: position }], flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.character, { backgroundColor: theme.primary }]}><Text style={{ color: '#fff' }}>😅</Text></View>
          <View style={[styles.character, { backgroundColor: '#444' }]}><Text style={{ color: '#fff' }}>🐶</Text></View>
          <View style={[styles.character, { backgroundColor: '#888' }]}><Text style={{ color: '#fff' }}>🍺</Text></View>
        </Animated.View>
      </View>

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity style={[styles.smallAction, { backgroundColor: theme.button }]} onPress={()=> setRunning(r=>!r)}><Text style={{ color: '#fff' }}>{running? 'Parar': 'Correr'}</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.smallAction, { backgroundColor: theme.button }]} onPress={()=> setSpeed(s=> s + 0.5)}><Text style={{ color: '#fff' }}>Acelerar</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.smallAction, { backgroundColor: 'crimson' }]} onPress={()=> { setSpeed(1); setRunning(false); }}><Text style={{ color: '#fff' }}>Reset</Text></TouchableOpacity>
      </View>
    </View>
  );
}
