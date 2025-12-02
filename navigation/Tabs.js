import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BotecoUseState from '../screens/BotecoUseState';
import PetiscosScreen from '../screens/PetiscosScreen';
import ContaScreen from '../screens/ContaScreen';
import PiadasScreen from '../screens/PiadasScreen';
import BotecoJSX from '../screens/BotecoJSX.js';

const Tab = createBottomTabNavigator();

export default function Tabs(){
  return (
    <Tab.Navigator initialRouteName="BotecoUseState">
      <Tab.Screen name="Cervejas" component={BotecoUseState} />
      <Tab.Screen name="Petiscos" component={PetiscosScreen} />
      <Tab.Screen name="Conta" component={ContaScreen} />
      <Tab.Screen name="Piadas" component={PiadasScreen} />
      <Tab.Screen name="Conceitos" component={BotecoJSX} />
    </Tab.Navigator>
  );
}
