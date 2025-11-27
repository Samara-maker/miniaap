import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LabComponentsScreen from '../screens/LabComponentsScreen';
import JSXLabScreen from '../screens/JSXLabScreen';
import HooksLabScreen from '../screens/HooksLabScreen';
import APILabScreen from '../screens/APILabScreen';
import QuizScreen from '../screens/QuizScreen';
import InspectScreen from '../screens/InspectScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="LabComponents" component={LabComponentsScreen} />
      <Stack.Screen name="JSXLab" component={JSXLabScreen} />
      <Stack.Screen name="HooksLab" component={HooksLabScreen} />
      <Stack.Screen name="APILab" component={APILabScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Inspect" component={InspectScreen} />
    </Stack.Navigator>
  );
}
