import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import global from '../styles/global';

export default function HomeScreen({ navigation }){
  return (
    <ScrollView style={global.page} contentContainerStyle={{ paddingBottom:40 }}>
      <View style={{ marginBottom:12 }}>
        <Text style={global.titleLight}>React Labs — Boteco</Text>
        <Text style={[global.textLight, { marginTop:6 }]}>Aprenda React Native com humor e exemplos práticos.</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('BotecoUseState')}><Card title="Boteco do useState" subtitle="Contador de cerveja — aprenda useState" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Petiscos')}><Card title="Lista de Petiscos" subtitle="FlatList e renderItem" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Garcom')}><Card title="Garçom Online" subtitle="fetch(), loading e useEffect" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BotecoStyle')}><Card title="Menu do Boteco" subtitle="Flexbox e temas" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Conta')}><Card title="Simulador de Conta" subtitle="props e composição" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EscapeFiado')}><Card title="Escape do Fiado" subtitle="Animated + useRef" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MontarBoteco')}><Card title="Montar Meu Boteco" subtitle="Personalize tudo ao vivo" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Erros')}><Card title="Erros do Boteco" subtitle="Debug com humor" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Piadas')}><Card title="Piadas de Dev" subtitle="API de piadas" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}><Card title="Quiz — Dev ou Garçom?" subtitle="Teste seus conhecimentos" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MemoryGame')}><Card title="Lab — Memory Game" subtitle="Jogo da memória com 8 cartas" /></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Inspect')}><Card title="Modo Raio-X" subtitle="Ferramenta educativa" /></TouchableOpacity>
    </ScrollView>
  );
}
