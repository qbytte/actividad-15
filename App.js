import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/screens/HomeScreen"
import CreateScreen from "./src/screens/CreateScreen"
import DetailScreen from "./src/screens/DetailScreen"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        headerShown: false, // change this to `false`
    }} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen 
          name="Leds" 
          component={HomeStackScreen}  
          options={{
          tabBarLabel: 'Leds',
          tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="home" color={"#2196f3"} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Crear" 
          component={CreateScreen}
           options={{
              tabBarLabel: 'Crear',
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons name="plus" color={"#2196f3"} size={size} />
              )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}