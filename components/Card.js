import React from 'react';
import { View, Text } from 'react-native';
import global from '../styles/global';

export default function Card({ title, subtitle, style }){
  return (
    <View style={[global.cardBox, style]}>
      <Text style={{ color:'#e6eef8', fontWeight:'700' }}>{title}</Text>
      {subtitle && <Text style={{ color:'#9fb7d9', marginTop:6 }}>{subtitle}</Text>}
    </View>
  );
}
