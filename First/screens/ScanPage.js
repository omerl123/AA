import React ,{useState} from 'react';
import { View, Button, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


function CenterSquareScreen ({route})  {
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    { name: 'steak', amount: 3, price: 90 },
    { name: 'salad', amount: 4, price: 30},
    { name: 'french fries', amount: 7, price: 18 },
    { name: 'cola', amount: 2, price: 10 },
    { name: 'water', amount: 5, price: 7 },
  ]);
    
function generateRandomPassword() {
  const length = 7;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

  return (
    <View style={globalStyles.container}>
       <Header />
       <Text style={globalStyles.helloText}>Hello {route.params.parmaKey}</Text>
      <View style={globalStyles.square}/>
      <View style={globalStyles.buttonContainer}>
      <Button title="Scan" onPress={() => navigation.navigate("Show", {
      products: products,
      setProducts: setProducts,
      password : generateRandomPassword(),
    })
  }
/>
      <Button title = 'return' style={globalStyles.button} onPress={() => {navigation.navigate("Login");
    handleAddPress={handleAddPress};}}/>
      </View>
    </View>
  );
};



export default CenterSquareScreen;
