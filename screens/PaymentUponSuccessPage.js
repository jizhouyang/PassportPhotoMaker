import React,{useEffect,useState} from 'react';
import {View,StyleSheet,Text,ActivityIndicator,Image} from 'react-native';
import Colors from "../constants/Colors"
import {successPaymentHandler} from "../network/SuccessPaymentHandler"
import {PaymentItem} from "../components/PaymentItem"
import {ContinueShoppingButton} from "../components/ContinueShoppingButton"


export const PaymentSuccess =props=>{
    const [imageUrl,setImageUrl] = useState(null)
    useEffect(()=>{
        successPaymentHandler(props,setImageUrl).then()
    },[])

    const content = [
        {id:'0',key:'Product:',val:props.navigation.getParam('product')},
        {id:'1',key:'Payment ID:', val:props.navigation.getParam('PaymentId')},
        {id:'2',key:'Price:',val:'1.00USD'},
        {id:'3',key:'tax:',val:'0.00USD'},
        {id:'4',key:'create_time:',val:props.navigation.getParam('create_time')}
        ]
    return (
        <View style = {styles.container}>
            {imageUrl?
                <View style={styles.successContainer}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}>Congratulations!Your are all set!</Text>
                    </View>
                    <View style = {styles.imageContainer}>
                        <Image style = {styles.img} source={{uri:imageUrl}}/>
                    </View>
                    <PaymentItem content = {content}/>
                    <ContinueShoppingButton buttonHandler = {()=>{props.navigation.popToTop()}}/>
                </View>
                :<ActivityIndicator />}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.bgColor
    },
    successContainer:{
        width:'85%',
        height:'85%',
        elevation:8,
        borderRadius:15,
        backgroundColor:Colors.menuColor,
        overflow:'hidden',
        alignItems:'center'
    },
    textContainer:{
      width: '100%',
      backgroundColor:'rgba(0,0,0,3)',
        alignItems: 'center'
    },
    imageContainer: {
      width:150,
      height:150
    },
    img:{
        width:'100%',
        height:'100%'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
});