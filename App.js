import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Style Test')

  const onClickHandler = () => {
    setName('Style Test is done!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title='Add' onPress={onClickHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff0000',
    borderRadius: 25
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
  button: {
    width: 100,
    height: 100
  }
});
