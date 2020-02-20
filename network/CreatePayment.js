import React from 'react';

export const createPayment = async (props) =>{
    let accessToken = null
    const dataDetail =JSON.stringify({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "amount": {
                "total": "1.0",
                "currency": "USD",
                "details": {
                    "subtotal": "1.00",
                    "tax": "0",
                    "shipping": "0",
                    "handling_fee": "0",
                    "shipping_discount": "0",
                    "insurance": "0"
                }
            }
        }],
        "redirect_urls": {
            "return_url": "https://www.google.com",
            "cancel_url":"https://www.google.com"
        }
    })
    await fetch('https://api.sandbox.paypal.com/v1/oauth2/token',{
        method:'post',
        headers:new Headers({
            'Authorization':'Basic QVp6Q2l5UHNuQVhGZnpUVzV4OE94N0FoYVd0TkUybVN6dGlfNkQ1clNVNFNMTlpJYkNxQkw2UW85ZVRkZ2FYTThNRU5mVEl0MDFzOExzckg6RU5rSlFFVENUam10eGhHVDRpTmx6RWprdDFCaW92QzJ4MDF6YzhiVWJ6LUU5WHMyNVUydWlEMnFPRWU2ZjVuSy1PdFBHTVNGWEFncC1lNkY=',
            'Content-Type':'application/x-www-form-urlencoded'
        }),
        body:'grant_type=client_credentials'
    }).then(res=>{
        if(res.status){
            return res.json()
        }
    }).then(response=>{
        accessToken = response.access_token;
        return response.access_token
    }).then(async (token)=>{
        await fetch('https://api.sandbox.paypal.com/v1/payments/payment', {
            method:'post',
            headers:new Headers({
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }),
            body:dataDetail
        }).then(res=>{
            if (res.status){
                return res.json();
            }
        }).then(response=>{
            const payPage = response.links.find(data => data.rel === "approval_url")
            props.navigation.replace('PaymentPage',{approvalUrl:payPage.href,accessToken:accessToken,
                photoId:props.navigation.getParam('photoId'),
                product:props.navigation.getParam('product')})
            /*console.log(response)*/
        }).catch((error)=>{
            console.log(error)
        })}).catch(error=>{
        console.log(error)
    })
}