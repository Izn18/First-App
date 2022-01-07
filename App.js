import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, FlatList } from 'react-native';

export default function App() {

  const [Items, setItems] = useState([
    {name:'Item 1'},
    {name:'Item 2'},
    {name:'Item 3'},
    {name:'Item 4'},
    {name:'Item 5'},
    {name:'Item 6'},
    {name:'Item 7'},
    {name:'Item 8'},
    {name:'Item 9'},
    {name:'Item 10'},
    {name:'Item 11'},
    {name:'Item 12'},
    {name:'Item 13'}
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...Items, { name: 'Item14'}])
    setRefreshing(false)
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  item: {
    margin: 10,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  }
});
