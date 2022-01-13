import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.toggleDrawer();
    //navigation.openDrawer();
    //navigation.closeDrawer();
    //navigation.navigate("Screen_B");
    //navigation.replace("Screen_B");
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
        <Text style={styles.text}>Open the Drawer!</Text>
      </Pressable>
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
    fontWeight: "bold",
    margin: 10,
  },
});
