import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        //multiline
        //keyboardType="numeric"
        //maxLength={2}
        //editable={false}
        //secureTextEntry
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 25,
      },
      default: {},
    }),
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ffffff",
    width: "75%",
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
  },
});
