import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [welcome, setWelcome] = useState('Welcome!')
  const [session, setSession] = useState({number: 6, title: 'states'})
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setWelcome('Welcome back!')
    setSession({number: 7, title: 'styles'})
    setCurrent(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{welcome}</Text>
      <Text style={styles.text}>This is section {session.number} and is about {session.title}.</Text>
      <Text style={styles.text}>This is the {current ? 'current session.' : 'next session.'}</Text>
      <Button title='Next Section' onPress={onClickHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});
