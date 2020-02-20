import React from 'react';
import {Text, TouchableOpacity, View,StyleSheet} from "react-native"
import {AntDesign} from "@expo/vector-icons"


export const ContinueShoppingButton = props=> {
    return (<TouchableOpacity style={styles.buttonContainer} onPress={props.buttonHandler}>
        <View style={styles.returnHomeContainer}>
            <AntDesign name={'shoppingcart'} size={28} color={'white'}/>
            <Text style={styles.buttonText}> Continue Shopping</Text>
        </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop: 25,
        width:300,
        maxWidth:'95%',
        height:'10%'
    },
    returnHomeContainer: {
        flex: 1,
        backgroundColor: 'rgba(16,16,16,85)',
        borderRadius: 25,
        elevation: 3,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:8
    },
    buttonText:{
        fontSize:20,
        color:'white',
        textAlign: 'center'
    }

})