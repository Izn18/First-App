import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      
      <View style={styles.boxTop}>

        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      
      </View>

      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>

      <View style={styles.boxBottom}>

        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
     
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view4: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5: {
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view7: {
    flex: 1,
    backgroundColor: '#0f00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxTop: {
    flexDirection: 'row',
  },
  boxBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  }
});
