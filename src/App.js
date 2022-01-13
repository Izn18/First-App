import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import { Ionicons } from "@expo/vector-icons";

//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Screen_A") {
              //color = focused ? "#00f" : "#000";
              size = focused ? 25 : 20;
              iconName = "home";
            } else if (route.name === "Screen_B") {
              //color = focused ? "#f00" : "#000";
              size = focused ? 25 : 20;
              iconName = "flask";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#86DC3D",
          inactiveTintColor: "#f00",
          activeBackgroundColor: "#fff",
          inactiveBackgroundColor: "#999",
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        activeColor="#86DC3D"
        inactiveColor="#F00"
        barStyle={{ backgroundColor: "#999" }}
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          //options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
