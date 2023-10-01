import { StatusBar } from 'expo-status-bar';
import Lobby from './components/Lobby';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Players from './components/Players';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './components/Game';

const Stack = createStackNavigator();

export default function App() {
  return (
    
        <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Lobby} />
            <Stack.Screen name="lobby" component={Players} />
            <Stack.Screen name="game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
