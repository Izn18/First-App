import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    alignItems: "stretch",
    justifyContent: "center",
  },
  view1: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    flex: 1,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
    textTransform: "uppercase",
  },
});
