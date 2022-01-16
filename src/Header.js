import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Tutorial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 50,
    backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;
