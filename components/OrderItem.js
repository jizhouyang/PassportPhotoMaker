import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native";
export const OrderItem=props=>{
    const content = [
        {id:'0',key:'Product:', val:`${props.countryCode} ${props.photoCode}`},
        {id:'1',key:'Payment ID:',val: props.paymentInfo},
        {id:'2',key:'Create Time:',val:props.createTime},
        {id:'3',key:'Price:',val:'1.00USD'}
    ]
    console.log(props.localUrl)
    return (

        <View style={styles.OrderItemContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={{uri:props.localUrl}}/>
            </View>
            {
                content.map(item=>
                    <View key={item.id} style={styles.rowContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>{item.key}</Text>
                        </View>
                        <View style={styles.valContainer}>
                            <Text style={styles.valText}>{item.val}</Text>
                        </View>
                    </View>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    OrderItemContainer:{
        marginVertical:10,
        width:350,
        maxWidth:'100%',
        backgroundColor: 'white',
        borderRadius:20,
        elevation:5,
        overflow:'hidden',
        alignItems:'center'
    },
    imageContainer:{
        width: 180,
        height:180,
        maxWidth:'100%'
    },
    img:{
        width:'100%',
        height:'100%'
    },

    rowContainer:{
        width:'100%',
        flexDirection:"row"
    },

    labelContainer:{
        width:'50%',
        backgroundColor:'black',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'rgba(86,85,84,69)'
    },

    valContainer:{
        width:'50%',
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'rgba(86,85,84,69)'
    },

    labelText:{
        fontSize: 15,
        color:'white'
    },

    valText:{
        fontSize:15,
        color:'black',
        textAlign:'center'
    }
});