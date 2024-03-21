  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import LoginPage from '../screens/LoginPage';
  import ScanPage from '../screens/ScanPage';
  import ShowReceipt from '../screens/ShowReceipt';
  import AddProduct from '../screens/AddProduct';

  const Stack = createNativeStackNavigator();

  export default function HomeStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false, LoginPage: (props) => <LoginPage {...props} /> }}
          />
          <Stack.Screen
            name="Scan"
            component={ScanPage}
            options={{ headerShown: false,Scan: (props) => <Scan {...props} /> }}
          />
          <Stack.Screen
          name="Show"
          component={ShowReceipt}
          options={{ headerShown: false,Show: (props) => <Show {...props} />}}
          />
          <Stack.Screen
          name="Add"
          component={AddProduct}
          options={{ headerShown: false,Add: (props) => <Add {...props} />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
