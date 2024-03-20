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
    { name: 'france fries', amount: 7, price: 18 },
    { name: 'cola', amount: 2, price: 10 },
    { name: 'water', amount: 5, price: 7 },
  ]);

  const handleAddPress = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }

  return (
    <View style={globalStyles.container}>
       <Header />
       <Text style={globalStyles.name}>Hello {route.params.parmaKey}</Text>
      <View style={globalStyles.square}/>
      <View style={globalStyles.buttonContainer}>
      <Button title="Scan" onPress={() => navigation.navigate("Show", {
      products: products,
      setProducts: setProducts,
    })
  }
/>
      <Button title = 'return' style={globalStyles.button} onPress={() => {navigation.navigate("Login");
    handleAddPress={handleAddPress}}}/>
      </View>
    </View>
  );
};



export default CenterSquareScreen;
