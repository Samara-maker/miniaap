import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function CustomizeScreen({ theme, onChangeTheme, currentThemeName }){
  const [name, setName] = useState('Bar do Dev');

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <Text style={[styles.title, { color: theme.primary }]}>Montar Meu Boteco 🎨</Text>
      <Text style={[styles.paragraph, { color: theme.text }]}>Personalize nome e tema — as mudanças usam estado local.</Text>

      <Text style={[styles.label, { color: theme.text }]}>Nome do Boteco</Text>
      <TextInput value={name} onChangeText={setName} style={[styles.input, { borderColor: theme.border, color: theme.text }]} placeholder="Digite o nome" placeholderTextColor={theme.muted} />

      <Text style={[styles.label, { color: theme.text, marginTop: 12 }]}>Tema</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TouchableOpacity style={[styles.themeSwatch, currentThemeName === 'mesa' && { borderWidth: 3, borderColor: theme.primary }]} onPress={()=> onChangeTheme('mesa')}>
          <View style={{ backgroundColor: '#C68642', width: 36, height: 36, borderRadius: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.themeSwatch, currentThemeName === 'noite' && { borderWidth: 3, borderColor: theme.primary }]} onPress={()=> onChangeTheme('noite')}>
          <View style={{ backgroundColor: '#2B2D42', width: 36, height: 36, borderRadius: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.themeSwatch, currentThemeName === 'verde' && { borderWidth: 3, borderColor: theme.primary }]} onPress={()=> onChangeTheme('verde')}>
          <View style={{ backgroundColor: '#2F9E44', width: 36, height: 36, borderRadius: 6 }} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.note, { color: theme.text }]}>Seu boteco agora é: <Text style={{ color: theme.primary }}>{name}</Text></Text>
    </ScrollView>
  );
}
