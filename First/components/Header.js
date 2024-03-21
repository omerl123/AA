import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from '../styles/global';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    const route = useRoute();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return(
        <View style={globalStyles.header}>
            <Text style={globalStyles.title}>EasyReceipt</Text>
            {route.name !== 'Login' && (
                <TouchableWithoutFeedback onPress={handleGoBack}>
                    <Text style={globalStyles.backArrow}>{`<`}</Text>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
}
