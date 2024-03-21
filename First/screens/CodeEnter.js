import React, { useState } from 'react';
import { View, Button, Text, TouchableWithoutFeedback,TextInput,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


function CodeEnter ({ route }){
    const [code,setcode] = useState(0);
    const navigation = useNavigation();
    const initialProducts = route.params && route.params.products ? route.params.products : [];
    const [products, setProducts] = useState(initialProducts);

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.container}>
              <Header />
              <View style={globalStyles.back}>
                <Text>Enter a Code</Text>
                <TextInput style={globalStyles.input} tvalue={code} onChangeText={setcode} placeholder='Enter Code Here...' />
                <View style={globalStyles.buttonContainer}>
                  <Button title='Enter' style={globalStyles.button} onPress={() => navigation.navigate("Show",{
                    products: products,
                    setProducts: setProducts,
                    parmaKey: code
                  })
                  }/>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      }
    
export default CodeEnter;
