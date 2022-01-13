import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_B");
    //navigation.replace("Screen_B");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#00f",
        })}
      >
        <Text style={styles.text}>Go to Screen B!</Text>
      </Pressable>
    </View>
  );
}

function ScreenB({ navigation }) {
  const onPressHandler = () => {
    //navigation.navigate("Screen_A");
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#f00",
        })}
      >
        <Text style={styles.text}>Go back to Screen A!</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //screenOptions={{ header: () => null }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{ header: () => null }}
        />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});
