import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {WebView} from "react-native-webview";



const PaymentPage = props=>{
    const [url,setUrl] = useState(props.navigation.getParam('approvalUrl'))
    const navigationChange = (webViewState)=>{
        if (webViewState.url.includes('https://www.google.com/')) {
            setUrl(null);
            console.log(webViewState.url)
            const url = webViewState.url.split('?')[1].split('&')
            const theRequest = new Object();
            for (let i=0;i<url.length;i++){
                let keyValuePair = url[i].split('=')
                theRequest[keyValuePair[0]] = keyValuePair[1]
            }
            const paymentId = theRequest['paymentId']
            const PayerID = theRequest['PayerID']
            console.log(paymentId)

            fetch(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`, {
                method:'post',
                headers:new Headers({
                    'Authorization':`Bearer ${props.navigation.getParam('accessToken')}`,
                    'Content-Type':'application/json'
                }),
                body:JSON.stringify({payer_id: PayerID})
            }).then(res=>{
                console.log(res.status)
                return res.json()
            }).then( res=>{
                console.log(res)
                props.navigation.replace('PaymentSuccess',{
                    PaymentId:res.id,
                    photoID:props.navigation.getParam('photoId'),
                    create_time:res.create_time,
                    product:props.navigation.getParam('product')})
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    return (
        <View style = {styles.container}>
            <WebView
                style={styles.paymentContainer}
                source={{ uri: url}}
                onNavigationStateChange = {navigationChange}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    paymentContainer:{
        width: 400
    }
})
export default PaymentPage