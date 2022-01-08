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
  Modal,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 0) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => SetshowWarning(false)}
        animationType="fade"
        //hardwareAccelerated -> nur für android
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 0 characters.
              </Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    textAlign: "center",
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
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
