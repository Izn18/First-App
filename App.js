import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";

export default function App() {
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={data}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={["#ff00ff"]}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
  },
  item: {
    backgroundColor: "#00ff00",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#ff0000",
  },
  section: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#ff0000",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
  },
});
