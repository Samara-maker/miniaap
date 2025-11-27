import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import global from '../styles/global';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={global.page} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={{ marginBottom: 12 }}>
        <Text style={global.titleLight}>React Labs</Text>
        <Text style={[global.textLight, { marginTop: 6 }]}>
          Aprenda React Native interagindo com labs e um playground.
        </Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Card title="Labs Interativos" subtitle="Experimente código e veja o resultado ao vivo" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('LabComponents')}>
        <Card title="Lab — Componentes" subtitle="Mexa em props e veja a prévia" style={{ marginVertical: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('JSXLab')}>
        <Card title="Lab — JSX" subtitle="Edite blocos de JSX" style={{ marginVertical: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HooksLab')}>
        <Card title="Lab — Hooks" subtitle="Veja estados e efeitos funcionando" style={{ marginVertical: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('APILab')}>
        <Card title="Lab — API" subtitle="Demonstração de recursos nativos" style={{ marginVertical: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Inspect')}>
        <Card title="Modo Raio-X" subtitle="Veja a árvore interna de cada componente" style={{ marginVertical: 8 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Card title="Quiz Inteligente" subtitle="Perguntas com explicação" style={{ marginVertical: 8 }} />
      </TouchableOpacity>
    </ScrollView>
  );
}
