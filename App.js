import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from 'react-native';
const imageSRC = require("./multi-platform-button-v1.svg");

export default function App() {
    const [pressedCount, setPressedCount] = useState(0);
    const [name, setName]= useState("");

  return (
      <ScrollView vertical>
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      
    </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{width:100, height:100}} source={imageSRC} />
      </View>
    </View>
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>The <Text style={{ fontWeight: 'bold' }}>quick brown fox</Text> jumps over the lazy dog</Text>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
      {/* This is our scrollable area */}
      <ScrollView horizontal>
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
      </ScrollView>
    </View>
  </View>
  <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >= 3}
      />
    </View>
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
    }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
     secureTextEntry 
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
      />
    </View>
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Box color="red" />
    <Box color="green" />
    <Box color="blue" />
  </View>
  <View style={styles.layout}>
    <View style={styles.card} />
    <View style={styles.card} />
  </View>

  <View style={styles.layout}>
    <Pressable>
      {(state) => <PressableBox pressed={state.pressed} />}
    </Pressable>
  </View>

    </ScrollView>
  );
}


export const Box = (props) => (
    <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
  );
  
export const PressableBox = (props) => (
  <View style={[styles.box, props.pressed && { backgroundColor: 'blue' }]} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
  },
  card: {
    width: 100, 
    height: 100, 
    backgroundColor: 'white', 
    margin: 16, 
    borderRadius: 2, 
    shadowColor: 'black', 
    shadowOpacity: 0.3, 
    shadowRadius: 1, 
    shadowOffset: { height: 1, width: 0.3 } 
  },
});
