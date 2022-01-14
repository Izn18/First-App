import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      android_ripple={{ color: "#f00ff0" }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ffffff" : props.color,
        },
        styles.pressable,
        { ...props.style },
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
  pressable: {
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default CustomButton;
