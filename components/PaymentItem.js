import React from 'react';
import {Text, View,StyleSheet} from "react-native"

export const PaymentItem = props => {
    return (<View style={styles.contentContainer}>
        {props.content.map((item) => <View key={item.id} style={styles.rowContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{item.key}</Text>
            </View>
            <View style={styles.valContainer}>
                <Text style={styles.valText}>{item.val}</Text>
            </View>
        </View>)
        }
    </View>);
}

const styles = StyleSheet.create({
    contentContainer:{
        marginTop:5,
        width:300,
        maxWidth:'95%'
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