
import React from "react";
import { View, Text, Modal, TouchableOpacity, Animated,TouchableWithoutFeedback } from "react-native";
import { globalStyles } from '../styles/global';

const CustomHalfScreen = ({ modalVisible, setModalVisible }) => {
    const modalWidth = new Animated.Value(0);

    React.useEffect(() => {
        if (modalVisible) {
            Animated.timing(modalWidth, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(modalWidth, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);

    return (
        <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
    >
        <TouchableWithoutFeedback onPress={() => {
            setModalVisible(false);
        }}>
            <View style={globalStyles.slide}>
                <TouchableOpacity onPress={() => alert("חוג צילום!")}>
                    <Text style={globalStyles.buttonSlied}>Login Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("חוג צילום!")}>
                    <Text style={globalStyles.buttonSlied}>Register Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={globalStyles.buttonSlied}>Close</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
    )
}    

export default CustomHalfScreen;
