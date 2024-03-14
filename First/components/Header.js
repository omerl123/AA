import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import CustomHalfScreen from './CustomHalfScreen'; 

export default function Header() {
    const [modalVisible, setModalVisible] = useState(false);


    return(
        <TouchableWithoutFeedback onPress={() => {
            setModalVisible(false);
        }}>
            <View style={globalStyles.header}>
                <Ionicons name="menu-sharp" size={24} color="black" onPress={() => setModalVisible(true)} />
                <Text style={globalStyles.title}>EasyReceipt</Text>
                <CustomHalfScreen modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
            </View>
            </TouchableWithoutFeedback>
        
    )
}