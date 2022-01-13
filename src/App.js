import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          drawerType: "slide",
          drawerPosition: "left",
          swipeEdgeWidth: 500,
          drawerHideStatusBarOnOpen: false,
          overlayColor: "#999",
          drawerStyle: {
            backgroundColor: "#e6e6e6",
            width: "60%",
          },
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0080ff",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title: "Screen A Title",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: "Screen B Title",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="flask"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
          initialParams={{ ItemName: "Item from Drawer", ItemId: 12 }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
