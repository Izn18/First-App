import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [increment, setIncrement] = useState(0);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setIncrement(increment + 5);
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{increment}</Text>
      <Button title="Add" onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {count} times.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});
