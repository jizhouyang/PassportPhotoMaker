import {Asset} from "expo-asset"
import * as ImageManipulator from "expo-image-manipulator";
import ServerAPI from "../constants/ServerAPI"
import {Alert} from "react-native";

export const sendImageHandler = async (props,pickedImage,imageDetail) =>{
    if (!pickedImage){
        Alert.alert(
            'No Photos!',
            'You need to take photo before you send it!',
            [{ text: 'Okay' }]
        );
    }else {
        const imageURL = Asset.fromModule(require('../assets/images/test/0.jpg')).uri;
        const response = await ImageManipulator.manipulateAsync(imageURL, [], {base64: true})
        const data = new FormData();
        data.append('countryCode', props.navigation.getParam('countryCode'));
        data.append('photoCode', 'passport');
        data.append('imageBase64', response.base64);
        const testData = JSON.stringify({'countryCode':props.navigation.getParam('countryCode'),'photoCode':'passport','imageBase64':response.base64})
        await fetch(ServerAPI.imageUpload, {
            method: 'post',
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body: testData
        }).then(res => {
            if (res.status) {
                return res.json();
            }
        }).then((responseJson) => {
            if (responseJson.watermarkPhotoLink) {
                props.navigation.navigate("confirmationPage", {
                    url: responseJson.watermarkPhotoLink,
                    product: props.navigation.getParam('title'),
                    detail: imageDetail,
                    photoId:responseJson.photoDbId
                })
            }
        }).catch((error) => {
            console.error(error);
        });
    }
};


