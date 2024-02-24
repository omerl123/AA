import React from 'react';
import { View, Button, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function CenterSquareScreen ()  {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
       <Header />
      <View style={globalStyles.square}/>
      <View style={globalStyles.buttonContainer}>
      <Button title = 'Scan' style={globalStyles.button}/>
      <Button title = 'return' style={globalStyles.button} onPress={() => navigation.navigate("Login")}/>
      </View>
    </View>
  );
};



export default CenterSquareScreen;
