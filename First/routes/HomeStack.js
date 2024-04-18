  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import LoginPage from '../screens/LoginPage';
  import ScanPage from '../screens/ScanPage';
  import ShowReceipt from '../screens/ShowReceipt';
  import AddProduct from '../screens/AddProduct';
  import Code from '../screens/CodeEnter';
  import Register from '../screens/Register';
  import Camera from '../screens/Camera';
  import TestT from '../screens/TestT';

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
          <Stack.Screen
          name="Code"
          component={Code}
          options={{ headerShown: false,Add: (props) => <Add {...props} />}}
          />
           <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false,Add: (props) => <Add {...props} />}}
          />
          <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false,Add: (props) => <Add {...props} />}}
          />
          <Stack.Screen
          name="TestT"
          component={TestT}
          options={{ headerShown: false,Add: (props) => <Add {...props} />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
