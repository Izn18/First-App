import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function ScreenA({ navigation }) {
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