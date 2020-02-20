import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Colors from "../constants/Colors";
import {sendImageHandler} from '../network/UploadImage';
import * as ImageManipulator from "expo-image-manipulator"

const ImgPicker = props => {
    const [pickedImage, setPickedImage] = useState();
    const [imageDetail, setImageDetail] = useState();
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant camera permissions to use this app.',
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            base64:true,
            quality: 0.5
        });
        const imageResult=await ImageManipulator.manipulateAsync(image.uri,[{rotate:90}])
        setImageDetail(image);
        setPickedImage(imageResult.uri);
    };

    const uploadImageHandler = ()=>sendImageHandler(props,pickedImage,imageDetail)


    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                    <Text>No image picked yet.</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedImage }} />
                )}
            </View>
            <View style={styles.buttonContainer}>
            <Button
                title="Take Image"
                color = {Colors.buttonColor}
                onPress={takeImageHandler}
            />
            <Button
                title = "Send Image"
                color = {Colors.buttonColor}
                onPress = {uploadImageHandler}
            />
            </View>
        </View>
    );
};

ImgPicker.navigationOptions = navigationData =>{
    return {
      headerTitle:  navigationData.navigation.getParam('title')
    };
};

const styles = StyleSheet.create({
    imagePicker: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagePreview: {
        width: '80%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.borderColor,
        borderWidth: 1
    },
    buttonContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;