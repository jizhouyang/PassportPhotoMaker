import React, {useState} from 'react';
import {View, Image, Text,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import {createPayment} from "../network/CreatePayment"


const ConfirmationPage = props =>{
    console.log(props.navigation.getParam('url'))
    const creatPaymentHandler = ()=>{
        createPayment(props).then(res=>{
            console.log("Succeeding in creating Payment")
        }).catch(err=>{
            console.log(err)
        })
    }
    /*const url = `${ServerAPI.imageDownload}${props.navigation.getParam('url')}`*/
    const url = props.navigation.getParam('url')
    const content = [{id:"0",key:'Product:',val:props.navigation.getParam('product')},
        {id:"1",key:'height:',val:`${props.navigation.getParam('detail').height}px`},
        {id:"2",key:'Width:',val:`${props.navigation.getParam('detail').width}px`},
        {id:"3",key:'Price:',val:'$1.00'}]
    return (
      <View style = {styles.mainContainer}>
          <View style = {styles.confirmationContainer}>
              <View style = {styles.imageContainer}>
                  <Image source = {{uri:url}} style={styles.img}/>
              </View>

              <View style = {styles.detailContainer}>
                  {content.map((item)=>
                  <View key = {item.id} style = {styles.contentContainer}>
                      <Text>{item.key}</Text>
                      <Text>{item.val}</Text>
                  </View>)}
                  <TouchableOpacity style = {styles.buttonContainer} onPress = {creatPaymentHandler}>
                      <View style = {styles.payContainer}>
                        <FontAwesome name={'cc-paypal'} size={50} color={'white'}/>
                      </View>

                  </TouchableOpacity>
              </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
          flex:1,
          backgroundColor:Colors.bgColor,
          justifyContent:'center',
          alignItems:'center'
    },

    confirmationContainer:{
          width:'80%',
          backgroundColor: 'white',
          borderRadius:30,
          height:'70%',
          alignItems: 'center',
              elevation: 8
    },

    detailContainer:{
        alignItems:"center",
        marginTop:10,
        borderWidth:0.1,
        width:'90%',
        height:'60%',
        borderColor:Colors.borderColor,
        borderRadius: 10,
        elevation:2
    },

    imageContainer:{
        width:'30%',
        height:'30%'
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    contentContainer:{
        marginVertical:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    buttonContainer:{
        marginTop: 10,
        width:'85%',
        height:'23%'
    },

    payContainer:{
        flex:1,
        backgroundColor:'rgba(4,95,203,50)',
        borderRadius:25,
        elevation:10,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default ConfirmationPage;