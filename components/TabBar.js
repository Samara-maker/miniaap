import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function TabBar({ tabs, active, onPress, theme }){
  return (
    <View style={[styles.tabBar, { backgroundColor: theme.tabBarBg }]}> 
      {tabs.map((t)=> (
        <TouchableOpacity key={t} style={styles.tabButton} onPress={()=>onPress(t)}>
          <Text style={[styles.tabText, active===t && { fontWeight: '700', color: theme.primary }]}>{t}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
