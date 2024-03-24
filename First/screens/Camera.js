import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text, SafeAreaView, Image, StatusBar,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';

function CameraComponent() {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [shareOptionVisible, setShareOptionVisible] = useState(true);

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
            setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permission...</Text>;
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>;
    }
    

    let takePicture = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false,
        };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    if (photo) {
        let sharePicture = () => {
            shareAsync(photo.uri)
            };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };
    const handleShareOptionPress = () => {
        setShareOptionVisible(false);
    
    };
    

        return (
            <SafeAreaView style={{flex: 1,backgroundColor: 'coral',alignItems: 'center',}}>
            <Image style={globalStyles.preview} source={{ uri: 'data:image/jpg;base64,' + photo.base64 }} />
            <View style={{ flexDirection: 'row', height: 90,justifyContent: 'space-between' }}>
            <TouchableWithoutFeedback onPress={handleShareOptionPress}>
                <TouchableOpacity onPress={sharePicture} style={{ marginRight: 50,marginTop:20 }}>
                    <MaterialIcons name="share" size={44} color="black" />
                </TouchableOpacity>
            </TouchableWithoutFeedback>
                {hasMediaLibraryPermission &&
                    <TouchableOpacity onPress={savePhoto} style={{marginTop:20}}>
                        <MaterialIcons name="save" size={44} color="black" />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => setPhoto(undefined)} style={{ marginLeft: 60,marginTop:20 }}>
                    <MaterialIcons name="camera-alt" size={44} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        );
    }
    return (
        <Camera style={globalStyles.container} ref={cameraRef}>
            <View style={globalStyles.CameraButton}>
                <TouchableOpacity onPress={() => takePicture()} style={globalStyles.cameraButton} >
                <View style={globalStyles.innerCircle}>
                    <MaterialIcons name="camera-alt" size={80} color="white" />
                </View>
                </TouchableOpacity>
            </View>
        </Camera>
    );
}

export default CameraComponent;
