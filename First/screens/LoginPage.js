import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
  const [UserName, SetUserName] = useState('');
  const [Password, SetPassword] = useState('');
  const navigation = useNavigation();

  const LoginCheck = async () => {
    try {
      const response = await fetch('http://192.168.1.40:5000/check_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          username: UserName,
          password: Password,
        }),
      });
  
      const data = await response.json();
  
      if (data === "2"){
        navigation.navigate("Scan", {
          paramKey: UserName
        })
      }
      else if (data === "1"){
        alert("The password is incorrect");
      }
      else {
        alert("The username and password are incorrect");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          <View style={[globalStyles.buttonContainer,{marginLeft:50}]}>
            <Button title='Login' style={globalStyles.button} onPress={LoginCheck}/>
            <Button title='Register' style={globalStyles.button} onPress={() => navigation.navigate("Register")}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginPage;
