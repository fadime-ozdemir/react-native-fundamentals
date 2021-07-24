import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, createContext} from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const imageSRC = require("./multi-platform-button-v1.svg");

export const AuthContext = createContext({
    hasUser: false, 
    setUser: () => {},
  });

  const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);
  
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>Login</Text>
      <Button title="login" onPress={() => setUser(true)} />

      </View>
    );
  };

  
const OverviewScreen = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>Overview</Text>
    </View>
  );
  
  const ProfileNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={OverviewScreen} />
    </Stack.Navigator>
  );
  
const FeedScreen = () => {
    const nav = useNavigation();
    const { setUser } = useContext(AuthContext);

    return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed</Text>
      <Button onPress={()=>nav.navigate('Catalog')} title='Go to Catalog' />
      <Button title="logout" onPress={() => setUser(false)} />
    </View>
  )};

  const CatalogScreen = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog</Text>
    </View>
  );

  const Stack = createStackNavigator();
  
  export const AppNavigator = () =>{
    const { hasUser } = useContext(AuthContext);

    return (
        <Stack.Navigator>
        {hasUser
          ? (<>
            <Stack.Screen name="Feed" component={FeedScreen} />
            <Stack.Screen name="Catalog" component={CatalogScreen} />
            </>)
          : <Stack.Screen name="Login" component={LoginScreen} />
        }
      </Stack.Navigator>
  )};

  
const CatalogScreen = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog</Text>
    </View>
  );
  
  const Tab = createBottomTabNavigator();
  
//   export const AppNavigator = () => (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={FeedScreen} />
//       <Tab.Screen name="Catalog" component={CatalogScreen} />
//       <Tab.Screen name="Profile" component={ProfileNavigator} />
//     </Tab.Navigator>
//   );

export default function App() {
    const [pressedCount, setPressedCount] = useState(0);
    const [name, setName]= useState("");
    const [hasUser, setUser] = useState(false);

  return (
   < AuthContext.Provider value={{ hasUser, setUser }}>
{/*   <NavigationContainer>
        <AppNavigator />
     </NavigationContainer> */}
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  </AuthContext.Provider>

//       <ScrollView vertical>
//     <View style={styles.container}>
//       <Text>Hello World</Text>
//       <StatusBar style="auto" />
      
//     </View>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
//       <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <Image style={{width:100, height:100}} source={imageSRC} />
//       </View>
//     </View>
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//         <Text style={{ fontSize: 16 }}>The <Text style={{ fontWeight: 'bold' }}>quick brown fox</Text> jumps over the lazy dog</Text>
//         <Text style={{ fontSize: 24, textAlign: 'center' }}>
//       Scroll me!
//     </Text>
//     <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
//       {/* This is our scrollable area */}
//       <ScrollView horizontal>
//         <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
//         <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
//         <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
//       </ScrollView>
//     </View>
//   </View>
//   <View style={{ flex: 1, justifyContent: 'center' }}>
//       <Text style={{ margin: 16 }}>
//         {pressedCount > 0
//           ? `The button was pressed ${pressedCount} times!`
//           : 'The button isn\'t pressed yet'
//         }
//       </Text>
//       <Button
//         title='Press me'
//         onPress={() => setPressedCount(pressedCount + 1)}
//         disabled={pressedCount >= 3}
//       />
//     </View>
//     <View style={{
//       flex: 1,
//       alignContent: 'center', 
//       justifyContent: 'center', 
//       padding: 16,
//     }}>
//       <Text style={{ marginVertical: 16 }}>
//         {name ? `Hi ${name}!` : 'What is your name?'}
//       </Text>
//       <TextInput
//      secureTextEntry 
//         style={{ padding: 8, backgroundColor: '#f5f5f5' }}
//         onChangeText={text => setName(text)}
//       />
//     </View>
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//     <Box color="red" />
//     <Box color="green" />
//     <Box color="blue" />
//   </View>
//   <View style={styles.layout}>
//     <View style={styles.card} />
//     <View style={styles.card} />
//   </View>

//   <View style={styles.layout}>
//     <Pressable>
//       {(state) => <PressableBox pressed={state.pressed} />}
//     </Pressable>
//   </View>

//     </ScrollView>
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
