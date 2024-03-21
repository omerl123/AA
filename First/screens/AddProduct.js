import React, { useState } from 'react';
import { View, Button, Modal, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

function AddProduct({ route }) {
  const [newProductName, setNewProductName] = useState('');
  const [newProductAmount, setNewProductAmount] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const navigation = useNavigation();
  const {setProducts, setAmountValues, setSplitValues, setSplitToValues,setPreviousAmounts } = route.params;

  const handleAddButtonPress = () => {
    if (typeof newProductName == 'string' && !isNaN(newProductAmount) && !isNaN(newProductPrice) &&
    (newProductName && newProductAmount && newProductPrice)) {
      const productToAdd = {
        name: newProductName,
        amount: parseInt(newProductAmount),
        price: parseFloat(newProductPrice),
      };
  
      setProducts(prevProducts => [...prevProducts, productToAdd]);
      setAmountValues(prevAmountValues => [...prevAmountValues, parseInt(newProductAmount)]);
      setSplitValues(prevSplitValues => [...prevSplitValues, parseInt(newProductAmount)]);
      setSplitToValues(prevSplitToValues => [...prevSplitToValues, parseInt(newProductAmount)]);
      setPreviousAmounts(prevpreviousAmounts => [...prevpreviousAmounts, parseInt(newProductAmount)]);
  
      setNewProductName('');
      setNewProductAmount('');
      setNewProductPrice('');
      navigation.navigate("Show");
    } else {
      alert('The fields are empty or you filled them in incorrectly');
    }
  }
  
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Product Name:</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter Product Name..."
            value={newProductName}
            onChangeText={(text) => setNewProductName(text)}
          />
          <Text>Product Amount:</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter Product Amount..."
            value={newProductAmount}
            onChangeText={(text) => setNewProductAmount(text)}
          />
          <Text>Product Price:</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Enter Product Price..."
            value={newProductPrice}
            onChangeText={(text) => setNewProductPrice(text)}
          />
          <Button title="Add" onPress={handleAddButtonPress} />
          <View style={{ marginTop: 20 }}>
            <Button title="Close" onPress={() => navigation.navigate("Show")} />
          </View>
        </View>
    </View>
  );
}

export default AddProduct;
