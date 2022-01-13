import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function ScreenA({ navigation, route }) {
  const onPressHandler = () => {
    //navigation.toggleDrawer();
    //navigation.openDrawer();
    //navigation.closeDrawer();
    //navigation.navigate("Screen_B", {ItemName: "Item from Screen A",ItemId: 12,});
    navigation.navigate("Screen_B");
    //navigation.replace("Screen_B");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#999999",
        })}
      >
        <Text style={styles.text}>Go to Screen B!</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.Message}</Text>
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
