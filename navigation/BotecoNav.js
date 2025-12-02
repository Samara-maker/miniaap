import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BotecoUseState from "../screens/BotecoUseState";
import BotecoJSX from "../screens/BotecoJSX";
import BotecoStyle from "../screens/BotecoStyle";
import GarcomScreen from "../screens/GarcomScreen";
import PetiscosScreen from "../screens/PetiscosScreen";
import ContaScreen from "../screens/ContaScreen";
import EscapeFiado from "../screens/EscapeFiado";
import ErrosScreen from "../screens/ErrosScreen";
import MontarBoteco from "../screens/MontarBoteco";
import PiadasScreen from "../screens/PiadasScreen";
import QuizScreen from "../screens/QuizScreen";

const Tab = createBottomTabNavigator();

export default function BotecoNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#f4b400",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#222" },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: "home",
            useState: "beer",
            JSX: "code-slash",
            Estilos: "color-palette",
            Garcom: "person",
            Petiscos: "fast-food",
            Conta: "cash",
            Escape: "run",
            Erros: "alert-circle",
            Montar: "construct",
            Piadas: "happy",
            Quiz: "help-circle",
          };
          const name = icons[route.name] || "information";
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="useState" component={BotecoUseState} options={{ title: "Boteco do useState" }} />
      <Tab.Screen name="JSX" component={BotecoJSX} options={{ title: "Boteco do JSX" }} />
      <Tab.Screen name="Estilos" component={BotecoStyle} options={{ title: "Boteco da Estilização" }} />
      <Tab.Screen name="Garcom" component={GarcomScreen} options={{ title: "Garçom Online" }} />
      <Tab.Screen
        name="Petiscos"
        component={PetiscosScreen}
        options={{ title: "🍟 Petiscos" }}
      />
      <Tab.Screen name="Conta" component={ContaScreen} options={{ title: "Simulador de Conta" }} />
      <Tab.Screen name="Escape" component={EscapeFiado} options={{ title: "Escape do Fiado" }} />
      <Tab.Screen name="Erros" component={ErrosScreen} />
      <Tab.Screen name="Montar" component={MontarBoteco} options={{ title: "Montar Meu Boteco" }} />
      <Tab.Screen name="Piadas" component={PiadasScreen} options={{ title: "Piadas do Boteco" }} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
    </Tab.Navigator>
  );
}
