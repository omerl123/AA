import React, { useState,useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

function Register({route}) {
  const [RegisterUserName, SetRegistarUserName] = useState('');
  const [RegisterPassword, SetRegisterPassword] = useState('');
  const [RegisterEmail,setRegisterEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigation = useNavigation();

  

  const insertData = async () => {
    fetch('http://192.168.1.40:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: RegisterEmail,
        username: RegisterUserName,
        password: RegisterPassword,
      }),
    })
    .then(response => response.json())
    .then(data => {
      navigation.navigate("Scan", {
        paramKey: RegisterUserName,
        data: data
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }
    


  

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <View style={globalStyles.container}>
        <Header />
        <View style={globalStyles.back}>
          <Text>UserName</Text>
          <TextInput style={globalStyles.input} value={RegisterUserName} onChangeText={SetRegistarUserName} placeholder='Enter Username...' />
          <Text>Password</Text>
          <TextInput style={globalStyles.input} value={RegisterPassword} onChangeText={SetRegisterPassword} placeholder='Enter Password...' />
          <Text>Email</Text>
          <TextInput style={globalStyles.input} value={RegisterEmail} onChangeText={setRegisterEmail} placeholder='Enter Email...' />
          <View style={globalStyles.buttonContainer}>
            <Button title='Register' style={globalStyles.button}  onPress={insertData}/>
          </View>
          <View style={globalStyles.buttonContainer}>
          <Button title='I have a user' style={globalStyles.button} onPress={() => navigation.navigate("Login")}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;