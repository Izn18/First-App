import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  SafeAreaView,
  Button,
  Touchable,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 0) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        "Warning",
        "You have to type in something!",
        [
          { text: "Later", onPress: () => console.warn("Later Pressed!") },
          { text: "Cancel", onPress: () => console.warn("Cancel Pressed!") },
          { text: "OK", onPress: () => console.warn("OK Pressed!") },
        ],
        { cancelable: true, onDismiss: () => console.warn("Alert dismissed!") }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => setName(value)}
      />

      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        android_ripple={{ color: "#f00ff0" }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0ff" : "#f00",
          },
          styles.pressable,
        ]}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable>

      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
    marginBottom: 15,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#00f",
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
