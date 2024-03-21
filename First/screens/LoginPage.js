import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, navigate } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
  const [UserName, SetUserName] = useState('');
  const [Password, SetPassword] = useState('');
  const navigation = useNavigation();

  

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <View style={globalStyles.container}>
        <Header />
        <View style={globalStyles.back}>
          <Text>UserName</Text>
          <TextInput style={globalStyles.input} tvalue={UserName} onChangeText={SetUserName} placeholder='Enter Username...' />
          <Text>Password</Text>
          <TextInput style={globalStyles.input} value={Password} onChangeText={SetPassword} placeholder='Enter Password...' />
          <View style={globalStyles.buttonContainer}>
            <Button title='Login' style={globalStyles.button} onPress={() => navigation.navigate("Scan",{
              parmaKey: UserName
            })
            }/>
            <Button title='Register' style={globalStyles.button} onPress={() => navigation.navigate("Register")}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginPage;