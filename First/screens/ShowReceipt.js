import React from 'react';
import { Text, View, Button, TextInput,ScrollView,DropDown } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function ShowReceipt({ route }) {
    const navigation = useNavigation();
    const products = route.params && route.params.products ? route.params.products : [];

    return (
        <View style={{ backgroundColor: 'azure', flex: 1 }}>
            <Header navigation={navigation} />
            <Text style={globalStyles.name}>קבלה</Text>
            <ScrollView>
            {products.map((product, index) => (
            <View key={index} style={globalStyles.products}>
                <Text style={globalStyles.productsText}>name: {product.name}</Text>
                <Text style={globalStyles.productsText}>amount: {product.quantity}</Text>
                <Text style={globalStyles.productsText}>price: {product.price}</Text>
                <View style={globalStyles.buttonContainer}>
                    <Button title="I Take" style={globalStyles.productsButtons} />
                    <TextInput style={globalStyles.inputReceipt} /> 
                    <Button title="Split" style={globalStyles.productsButtons}/>
                    <TextInput style={globalStyles.inputReceipt}  /> 
                    <Text>Split_To</Text>
                    <TextInput style={globalStyles.inputReceipt} /> 
                </View>
            </View>
        ))}
        </ScrollView>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="return"
                    titleStyle={globalStyles.button}
                    onPress={() => navigation.navigate("Scan", { parmaKey: route.params ? route.params.parmaKey : null })}
                />
            </View>
        </View>
    );
}

export default ShowReceipt;
