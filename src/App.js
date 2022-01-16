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
  const [data, setData] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"],
    },
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = data.length + 1;
    setData([
      ...data,
      {
        title: "Title " + adding_index,
        data: ["Item " + adding_index + "-1", "Item " + adding_index + "-2"],
      },
    ]);
    setRefreshing(false);
  };

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
    backgroundColor: "#ffffff",
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
    color: "#000000",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
  },
});
