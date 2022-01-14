import React from "react";
import { Alert, StyleSheet, Text, View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../utils/CustomButton";

export default function Home({ navigation, route }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length <= 0) {
      Alert.alert("Warning!", "Please enter your name to continue!");
    } else {
      try {
        var user = {
          Name: name,
        };
        await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
        Alert.alert("Success!", "Your name has been updated!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserName");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <Text style={styles.text}>You are {age} years old !</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        title="Update"
        color="#ff7f00"
        onPressFunction={updateData}
      />
      <CustomButton
        title="Delete"
        color="#f00000"
        onPressFunction={removeData}
      />
      <CustomButton title="Clear" color="#000000" onPressFunction={clearData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#86dc3d",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: "#ffffff",
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#555",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 20,
  },
});
