import React, { useEffect,useState } from 'react';
import { View,FlatList, StyleSheet } from 'react-native';
import ProductItem from "../components/ProductItem";
import Colors from '../constants/Colors';
const MainPage = props=>{
    const [products,setProducts]=useState(props.products)
    useEffect(()=>{
        if (props.navigation.getParam('products')){
            /*console.log("Search Text Change!")*/
            setProducts(props.navigation.getParam('products'))
        }
    },[props.navigation.getParam('products')])
    return (
        <View style = {styles.mainContainer}>
            <FlatList
                keyExtractor = {(item) => item.id}
                data = {products}
                renderItem = {itemData => (
                    <ProductItem typeOfPhotos={itemData.item.title}
                                 path = {itemData.item.img}
                                 goToTakePhotos = {
                                   ()=>props.navigation.navigate("takePhotos",
                                       {title:itemData.item.title,
                                       countryCode:itemData.item.countryCode})
                               }/>
                )}
            />
        </View>
    );

}


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.bgColor
    }
});
export default MainPage;