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
  const DATA = [
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3", "Item 2-4"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2", "Item 3-3"],
    },
    {
      title: "Title 4",
      data: ["Item 4-1", "Item 4-2"],
    },
  ];

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
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
    margin: 10,
    backgroundColor: "#00ff00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
  },
});
