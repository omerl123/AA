import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import ScanPage from '../screens/ScanPage';
import ShowReceipt from '../screens/ShowReceipt';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Show"
        component={ShowReceipt}
        options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
