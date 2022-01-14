import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TextInput, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert("Warning!", "Please enter your name and age to continue!");
    } else {
      try {
        var user = {
          Name: name,
          Age: age,
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require("../../assets/storage.png")} />
      <Text style={styles.text}>Asynch Storage</Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter your name"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input2}
        placeholder="Enter your age"
        onChangeText={(value) => setAge(value)}
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 75,
    marginBottom: 35,
  },
  text: {
    fontSize: 30,
    color: "#ffffff",
  },
  input1: {
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
  input2: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#555",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
