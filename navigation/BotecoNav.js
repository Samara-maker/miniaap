import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BotecoUseState from "../screens/BotecoUseState";
import BotecoJSX from "../screens/BotecoJSX";
import BotecoStyle from "../screens/BotecoStyle";
import QuizScreen from "../screens/QuizScreen";

const Tab = createBottomTabNavigator();

export default function BotecoNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#222" },
        tabBarActiveTintColor: "#f4b400",
        tabBarInactiveTintColor: "#fff",

        tabBarIcon: ({ color, size }) => {
          let icon;

          switch (route.name) {
            case "Início":
              icon = "home";
              break;
            case "useState":
              icon = "beer";
              break;
            case "JSX":
              icon = "code-slash";
              break;
            case "Estilos":
              icon = "color-palette";
              break;
            case "Quiz":
              icon = "help-circle";
              break;
          }

          return <Ionicons name={icon} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="useState" component={BotecoUseState} />
      <Tab.Screen name="JSX" component={BotecoJSX} />
      <Tab.Screen name="Estilos" component={BotecoStyle} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
    </Tab.Navigator>
  );
}
