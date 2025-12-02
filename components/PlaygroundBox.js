import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaygroundBox({ children, title, style }){
  return (
    <View style={[styles.box, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor:'#071226', padding:12, borderRadius:10, borderWidth:1, borderColor:'#123248', marginVertical:8 },
  title: { color:'#bfe0ff', fontSize:14, fontWeight:'600', marginBottom:8 }
});
