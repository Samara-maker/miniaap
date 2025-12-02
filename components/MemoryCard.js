import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function MemoryCard({ data, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={data.flipped || data.matched}
      style={[styles.card, data.flipped || data.matched ? styles.flipped : styles.hidden]}
    >
      <View>
        <Text style={styles.text}>{data.flipped || data.matched ? data.icon : '?'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: '22%', aspectRatio: 1, margin: '2%', borderRadius: 12, justifyContent:'center', alignItems:'center' },
  hidden: { backgroundColor:'#1a2b44', borderWidth:2, borderColor:'#233b60' },
  flipped: { backgroundColor:'#0ea5e9', borderWidth:2, borderColor:'#38bdf8' },
  text: { color:'#fff', fontSize:24, fontWeight:'800' }
});
