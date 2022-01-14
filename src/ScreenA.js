import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react/cjs/react.development";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function ScreenA({ navigation, route }) {
  let [fontsLoaded, error] = useFonts({
    Dancing: require("../assets/Fonts/DancingScript-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Users = [
    {
      id: 1,
      name: "User A",
    },
    {
      id: 2,
      name: "User B",
    },
    {
      id: 3,
      name: "User C",
    },
  ];

  const [name, setName] = useState("");

  const onPressHandler = () => {
    //navigation.toggleDrawer();
    //navigation.openDrawer();
    //navigation.closeDrawer();
    //navigation.navigate("Screen_B", {ItemName: "Item from Screen A",ItemId: 12,});
    //navigation.navigate("Screen_B");
    //navigation.replace("Screen_B");

    for (let user of Users) {
      setName(user.name);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#999999",
        })}
      >
        <Text style={styles.text}>Show last User!</Text>
      </Pressable>
      <Text style={styles.text}>{name}</Text>
    </View>
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
    margin: 10,
    fontFamily: "Dancing",
  },
});
