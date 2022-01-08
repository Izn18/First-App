import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

export default function App() {
  const [Items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 9, item: "Item 9" },
    { key: 10, item: "Item 10" },
    { key: 11, item: "Item 11" },
    { key: 12, item: "Item 12" },
    { key: 13, item: "Item 13" },
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 14, item: "Item14" }]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      horizontal={false}
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={["#ff0000"]}
        />
      }
    >
      {Items.map((i) => {
        return (
          <View style={styles.item} key={i.key}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
        );
      })}
    </ScrollView>
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
    color: "#ffffff",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
  },
});
