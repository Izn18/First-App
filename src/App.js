import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => setName(value)}
      />

      {/*<Button
        title={submitted ? "Clear" : "Submit"}
        onPress={onPressHandler}
        color="#00f"
        //disabled={submitted}
      />*/}

      {/*<TouchableOpacity
        // Auch möglich sind TouchableHighlight (mit underlayColor="#ffffff"), TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressHandler}
        //activeOpacity={0.8}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </TouchableOpacity>*/}

      <Pressable
        onLongPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        delayLongPress={1000}
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
