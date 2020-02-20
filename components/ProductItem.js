import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ProductItem = props=>{
    return (
        <TouchableOpacity style = {styles.itemContainer} onPress={props.goToTakePhotos}>
            <View style = {styles.listItem}>
                <Image source={props.path} style={styles.img}/>
                <Text>{props.typeOfPhotos}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    itemContainer:{
        height:100,
        marginVertical:15,
        width:350,
        maxWidth:'99%'
    },
    listItem:{
        flex:1,
        flexDirection:'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth:0.5,
        elevation:7,
        borderRadius:10
    },
    img:{
        width: '50%',
        height: '50%',
        resizeMode:'contain'
    }
});
export default ProductItem;