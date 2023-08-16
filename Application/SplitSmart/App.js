import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PeopleScreen from './screens/people';
import ItemScreen from './screens/items';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="People" component={PeopleScreen} />
                <Stack.Screen name="Items" component={ItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Go blue!</Text>
      <Button
        title="Click Me"
        onPress={() => navigation.navigate('People')}
      />
    </View>
  );
};

export default App;










/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Go blue</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


