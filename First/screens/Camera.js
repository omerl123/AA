import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text, SafeAreaView, Image, StatusBar,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import TextRecognition from 'react-native-text-recognition';

function CameraComponent({route}) {
    let cameraRef = useRef();
    const navigation = useNavigation();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [shareOptionVisible, setShareOptionVisible] = useState(true);
    const initialProducts = route.params && route.params.products ? route.params.products : [];
    const [products, setProducts] = useState(initialProducts);
    const [NText, setNText] = useState(null);


    function generateRandomPassword() {
        const length = 7;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }
      
        return password;
      }
      const uploadImage = async (imageData) => {
        try {
            const response = await fetch('http://192.168.1.40:5000/upload_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image_data: imageData })
            });
    
            const data = await response.json();
            console.log(data); // הדפסת התגובה מהשרת
        } catch (error) {
            console.error('Error uploading image:', error );
        }
    };
    
    
    

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
            uploadImage(photo.base64);
            navigation.navigate("TestT", {
                text: NText
            })
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
