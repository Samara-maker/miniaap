import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';

import HomeScreen from '../screens/HomeScreen';
import BotecoUseState from '../screens/BotecoUseState';
import BotecoJSX from '../screens/BotecoJSX.js';
import BotecoNav from './BotecoNav.js';
import BotecoStyle from '../screens/BotecoStyle';
import GarcomScreen from '../screens/GarcomScreen';
import PetiscosScreen from '../screens/PetiscosScreen';
import ContaScreen from '../screens/ContaScreen';
import EscapeFiado from '../screens/EscapeFiado';
import ErrosScreen from '../screens/ErrosScreen';
import MontarBoteco from '../screens/MontarBoteco';
import PiadasScreen from '../screens/PiadasScreen';
import QuizScreen from '../screens/QuizScreen';
import MemoryGameScreen from '../screens/MemoryGameScreen';
import InspectScreen from '../screens/InspectScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="BotecoUseState" component={BotecoUseState} options={{ title: 'Boteco do useState' }} />
      <Stack.Screen name="BotecoJSX" component={BotecoJSX} options={{ title: 'Boteco do JSX' }} />
      <Stack.Screen name="BotecoNav" component={BotecoNav} options={{ title: 'Boteco da Navegação' }} />
      <Stack.Screen name="BotecoStyle" component={BotecoStyle} options={{ title: 'Boteco da Estilização' }} />
      <Stack.Screen name="Garcom" component={GarcomScreen} options={{ title: 'Garçom Online' }} />
      <Stack.Screen name="Petiscos" component={PetiscosScreen} options={{ title: 'Petiscos' }} />
      <Stack.Screen name="Conta" component={ContaScreen} options={{ title: 'Simulador de Conta' }} />
      <Stack.Screen name="EscapeFiado" component={EscapeFiado} options={{ title: 'Escape do Fiado' }} />
      <Stack.Screen name="Erros" component={ErrosScreen} options={{ title: 'Erros do Boteco' }} />
      <Stack.Screen name="MontarBoteco" component={MontarBoteco} options={{ title: 'Montar Meu Boteco' }} />
      <Stack.Screen name="Piadas" component={PiadasScreen} options={{ title: 'Piadas do Boteco' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz — Dev ou Garçom?' }} />
      <Stack.Screen name="MemoryGame" component={MemoryGameScreen} options={{ title: 'Lab — Memory Game' }} />
      <Stack.Screen name="Inspect" component={InspectScreen} options={{ title: 'Modo Raio-X' }} />

      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
