import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header() {
    return(
        <View style={globalStyles.header}>
        <Ionicons name="menu-sharp" size={24} color="black" />
            <Text style={globalStyles.title}>EasyReceipt</Text>
        </View>
    )
}

