import React ,{useState,useRef,useEffect} from 'react';
import { View, Button, Text,Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';




function CenterSquareScreen ({route})  {
  let cameraRef = useRef();
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    { name: 'steak', amount: 3, price: 90 },
    { name: 'salad', amount: 4, price: 30},
    { name: 'french fries', amount: 7, price: 18 },
    { name: 'cola', amount: 2, price: 10 },
    { name: 'water', amount: 5, price: 7 },
  ]);
  const [hasGalleryPrermission,setHasGalleryPermission] = useState();
  const [image,setImage] = useState();
  const [hasCameraPermission, setHasCameraPermission] = useState();

  useEffect (() => {
    (async () => {
      const gallerystatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(gallerystatus.status === 'granted');
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
    })();
  }, [] );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [100, 140],
      quality: 1,
    });
  
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      saveCroppedImageToGallery(result.assets[0].uri);
    }
  };
  
  const saveCroppedImageToGallery = async (uri) => {
    try {
      await MediaLibrary.saveToLibraryAsync(uri);
      navigation.navigate("Show", {
        products: products,
        setProducts: setProducts,
        password : generateRandomPassword(),
      })
      alert('Image saved to gallery!');

    } catch (error) {
      alert('Failed to save image to gallery');
    }
  };

  if (hasGalleryPrermission === false){
    return <Text>No access to Internal Storage</Text>
  }





    
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

  return (
    <View style={globalStyles.container}>
       <Header />
       <Text style={globalStyles.helloText}>Hello {route.params.paramKey}</Text>
      <View style={globalStyles.square}>
      <Camera style={globalStyles.camera} ref={cameraRef} />
      </View>
      <View style={globalStyles.buttonContainer}>
      <Button title="Scan" onPress={() => navigation.navigate("Camera", {
      products: products,
      setProducts: setProducts,
      password : generateRandomPassword(),
    })}
    
/>
      <Button title = 'upload Image' onPress={() => pickImage()} />
      </View>
      <View style={globalStyles.buttonContainerCode}>
      <Button title="i have a code" onPress={() => navigation.navigate("Code",{
         products: products,
         setProducts: setProducts,
      }
      )}/>
      </View>
    </View>
  );
};



export default CenterSquareScreen;
