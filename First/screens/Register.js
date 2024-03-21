import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
  const [RegisterUserName, SetRegistarUserName] = useState('');
  const [RegisterPassword, SetRegisterPassword] = useState('');
  const [RegisterEmail,setRegisterEmail] = useState('');
  const navigation = useNavigation();

  

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <View style={globalStyles.container}>
        <Header />
        <View style={globalStyles.back}>
          <Text>UserName</Text>
          <TextInput style={globalStyles.input} tvalue={RegisterUserName} onChangeText={SetRegistarUserName} placeholder='Enter Username...' />
          <Text>Password</Text>
          <TextInput style={globalStyles.input} value={RegisterPassword} onChangeText={SetRegisterPassword} placeholder='Enter Password...' />
          <Text>Email</Text>
          <TextInput style={globalStyles.input} value={RegisterEmail} onChangeText={setRegisterEmail} placeholder='Enter Email...' />
          <View style={globalStyles.buttonContainer}>
            <Button title='Register' style={globalStyles.button} onPress={() => navigation.navigate("Scan",{
              parmaKey: RegisterUserName
            })
            }/>
          </View>
          <View style={globalStyles.buttonContainer}>
          <Button title='I have a user' style={globalStyles.button} onPress={() => navigation.navigate("Login")}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginPage;