import React from 'react';
import {DrawerItems} from "react-navigation-drawer";
import {View,ImageBackground,ScrollView,StyleSheet,Image} from 'react-native';
import Colors from "../constants/Colors"

const CustomDrawer = props=>{
    return (
        <View style = {styles.container}>
            <ImageBackground source = {require('../assets/images/background/drawer.jpg')} style = {styles.imgBackground}>
                <Image source={require('../assets/images/icons/profile.png')} style={styles.img}/>
            </ImageBackground>
            <ScrollView style = {styles.container}>
                <DrawerItems {...props} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
   container:{
       flex:1
   } ,
    imgBackground:{
       width:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'contain',
        paddingTop:40,
        paddingBottom:30
    },
    img:{
       width:120,
        maxWidth:'60%',
        height:120,
        borderWidth:4,
        borderColor:Colors.menuColor,
        borderRadius:11
    }
});
export default CustomDrawer