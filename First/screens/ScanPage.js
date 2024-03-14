import React ,{useState} from 'react';
import { View, Button, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function CenterSquareScreen ({route})  {
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    { name: 'steak', quantity: 3, price: 90 },
    { name: 'salad', quantity: 4, price: 30},
    { name: 'france fries', quantity: 7, price: 18 },
    { name: 'cola', quantity: 2, price: 10 },
    { name: 'water', quantity: 5, price: 7 },
  ]);

  return (
    <View style={globalStyles.container}>
       <Header />
       <Text style={globalStyles.name}>Hello {route.params.parmaKey}</Text>
      <View style={globalStyles.square}/>
      <View style={globalStyles.buttonContainer}>
      <Button title='Scan' onPress={() => navigation.navigate("Show", { products })} />
      <Button title = 'return' style={globalStyles.button} onPress={() => navigation.navigate("Login")}/>
      </View>
    </View>
  );
};



export default CenterSquareScreen;
