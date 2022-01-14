import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GlobalStyle from "../utils/GlobalStyle";

export default function ScreenB({ navigation, route }) {
  const { ItemName, ItemId } = route.params;

  const onPressHandler = () => {
    navigation.navigate("Screen_A", { Message: "Message from B!" });
    //navigation.goBack();
    //navigation.setParams({ ItemId: ItemId + 2 });
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
        <Text style={GlobalStyle.PressableText}>Go back to Screen A!</Text>
      </Pressable>
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>ID: {ItemId}</Text>
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
