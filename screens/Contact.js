import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Contact = props=>{
    return (
        <View style = {styles.Screen}>
            <Text> In progress...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Contact;