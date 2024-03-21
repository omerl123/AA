import React, { useState } from 'react';
import { Text, View, Button, ScrollView, Modal, TouchableWithoutFeedback, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';





function ShowReceipt({ route }) {
    const navigation = useNavigation();
    const initialProducts = route.params && route.params.products ? route.params.products : [];
    const [products, setProducts] = useState(initialProducts);
    const sum = products.reduce((total, product) => total + product.amount, 0);
    const [amountValues, setAmountValues] = useState([]);
    const [splitValues, setSplitValues] = useState([]);
    const [split_toValues, setSplitToValues] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [previousAmounts, setPreviousAmounts] = useState(initialProducts.map(product => product.amount));
    const password = route.params && route.params.password ? route.params.password : null;
    const [modalOpen, setModelOpen] = useState(false);
    const [Tip, SetTip] = useState(0);


    const handleAmountChange = (value, productIndex) => {
        const updatedAmountValues = [...amountValues];
        updatedAmountValues[productIndex] = { value: value, index: productIndex };
        setAmountValues(updatedAmountValues);
    };

    const handleSplitChange = (value, productIndex) => {
        const updatedSplitValues = [...splitValues];
        updatedSplitValues[productIndex] = { value: value, index: productIndex };
        setSplitValues(updatedSplitValues);
    };

    
    const handleSplit_toChange = (value, productIndex) => {
        const updatedSplit_toValues = [...split_toValues];
        updatedSplit_toValues[productIndex] = { value: value, index: productIndex };
        setSplitToValues(updatedSplit_toValues);
    };

    return (
        <View style={{ backgroundColor: 'azure', flex: 1 }}>
        <Header navigation={navigation} />
        <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <View style={globalStyles.model}>
        <Text style={globalStyles.percentageSign}>TipPercentage</Text>
            <View style={globalStyles.inputFade}>
            <TextInput style={globalStyles.input} value={Tip.toString()} onChangeText={(text) => {
                                                                                const newTip = parseFloat(text.replace('%', '')); 
                                                                                if (!isNaN(newTip)) {
                                                                                    SetTip(newTip);
                                                                                } else {
                                                                                    SetTip(0);
                                                                                }
                                                                            }}

                                                        placeholder='Enter Percent of tip...'  
                                                        keyboardType='numeric'
                                                    />
                </View>
            <View style={globalStyles.buttonsFade}>
                <Button title='Close' onPress={() => setModelOpen(false)} />
                <Button
                            title='Calculate'
                            onPress={() => {
                                const tipAmount = parseFloat(Tip);
                                if (!isNaN(tipAmount)) {
                                    const tipPrice = totalPrice * (tipAmount / 100);
                                    const newTotal = totalPrice + tipPrice;
                                    setTotalPrice(newTotal);
                                    setModelOpen(false);
                                }
                            }}
                        />
            </View>
        </View>
    </Modal>

    

            <Text style={globalStyles.text}>Receipt</Text>
            <Text style={globalStyles.text}>PasswordToShare: {password}</Text>
            <ScrollView>
                {products.map((product, index) => (
                    <View key={index} style={globalStyles.products}>
                        <Text style={globalStyles.productsText}>name: {product.name}</Text>
                        <Text style={globalStyles.productsText}>
                            amount: {product.amount} 
                            ({splitValues[index]?.value})
                            ({split_toValues[index]?.value })
                        </Text>
                        <Text style={globalStyles.productsText}>price: {product.price}</Text>
                        <View style={globalStyles.buttonContainerReceipt}>
                            <Button
                                title="I Took"
                                style={globalStyles.productsButtons}
                                onPress={() => {
                                    const selectedProduct = products[index];
                                    const newAmountValue = parseInt(amountValues[index]?.value) || 0;
                                    if (newAmountValue != 0){
                                    if (selectedProduct.amount - newAmountValue >= 0) {
                                        const newTotal = totalPrice + newAmountValue * selectedProduct.price;
                                        setProducts(prevProducts => {
                                            const updatedProducts = [...prevProducts];
                                            updatedProducts[index] = { ...updatedProducts[index], amount: selectedProduct.amount - newAmountValue };
                                            return updatedProducts;
                                        });
                                        setTotalPrice(newTotal);
                                        setAmountValues([]);
                                    } else {
                                        alert("The amount is greater than the existing amount of products😊");
                                    }
                                }else{
                                    alert("A value greater than 0 must be entered");
                                }
                                }}
                            />
                            <Dropdown
                                style={globalStyles.inputDropdown}
                                data={[...Array(sum + 1).keys()].map(value => ({ label: value.toString(), value: value }))}
                                value={amountValues[index]?.value || 0}
                                onChange={(value) => handleAmountChange(value.value, index)}
                                labelField="label"
                                valueField="value"
                                search
                            />
                        </View>
                        <View style={globalStyles.buttonContainerReceipt}>
                            <Button 
                                title="Split" 
                                style={globalStyles.productsButtons}
                                onPress={() => {
                                    const selectedProduct = products[index];
                                    const newSplitValue = parseInt(splitValues[index]?.value) || 0;
                                    const newSplitToValue = parseInt(split_toValues[index]?.value) || 0;
                                    const newTotal = totalPrice + (selectedProduct.price * newSplitValue) / newSplitToValue;
                                    if (newSplitValue != 0) {
                                        if (selectedProduct.amount - newSplitValue >= 0) {
                                            if (newSplitToValue > 1) {
                                                setProducts(prevProducts => {
                                                    const updatedProducts = [...prevProducts];
                                                    updatedProducts[index] = { ...updatedProducts[index], amount: selectedProduct.amount - newSplitValue };
                                                    return updatedProducts;
                                                });
                                                setTotalPrice(newTotal);
                                                setSplitValues([]);
                                                setSplitToValues([]);
                                            } else {
                                                alert("A value greater than 1 must be entered in SplitTo");
                                            }
                                        } else {
                                            alert("The amount is greater than the existing amount of products 😊");
                                        }
                                    } else {
                                        alert("A value greater than 0 must be entered");
                                    }
                                    
                                }}
                            />
                            <Dropdown
                                style={globalStyles.inputDropdown}
                                data={[...Array(sum + 1).keys()].map(value => ({ label: value.toString(), value: value }))}
                                value={splitValues[index]?.value || 0}
                                onChange={(value) => handleSplitChange(value.value, index)}
                                labelField="label"
                                valueField="value"
                                search
                            />
                            <Text>Split_To</Text>
                            <Dropdown
                                style={globalStyles.inputDropdown}
                                data={[...Array(sum + 1).keys()].map(value => ({ label: value.toString(), value: value }))}
                                value={split_toValues[index]?.value || 0}
                                onChange={(value) => handleSplit_toChange(value.value, index)}
                                labelField="label"
                                valueField="value"
                                search
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={globalStyles.lowerButtons}>
                <Text style={globalStyles.TotalPriceText}>Total Price: {totalPrice.toFixed(2)}</Text>
            </View>
            <View style={[globalStyles.lowerButtons,{  flexDirection: 'row-reverse'}]}>
                <Button
                    title='reset'
                    style={globalStyles.button}
                    color='red'
                    onPress={handleReset = () => {
                        const resetProductsAmount = products.map((product, index) => {
                            return { ...product, amount: previousAmounts[index] };
                        });
                        setProducts(resetProductsAmount);
                        setTotalPrice(0);
                        setAmountValues([]);
                        setSplitValues([]);
                        setSplitToValues([]);
                        setTotalPrice(0);
                    }}
                />
                <Button title='Tip' style={globalStyles.button} onPress={() => setModelOpen(true)}/> 
                <Button title='add item' 
                    style={globalStyles.button}
                    color='green'
                    onPress={() => navigation.navigate("Add", {
                        products: products,
                        setProducts: setProducts,
                        setAmountValues: setAmountValues,
                        setSplitValues: setSplitValues,
                        setSplitToValues: setSplitToValues,
                        setPreviousAmounts: setPreviousAmounts,
                    })} 
                />
            </View>
        </View>
    );
}

export default ShowReceipt;
