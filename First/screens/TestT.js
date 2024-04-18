import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';

function TestT({ route }) {
    const text = route.params.text;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.helloText}>this:</Text>
            {text ? <Text style={globalStyles.helloText}>{text}</Text> : null}
        </View>
    );
}

export default TestT;
