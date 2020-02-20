import ServerAPI from "../constants/ServerAPI"

export const successPaymentHandler = async (props,setImageUrl)=>{
    await fetch(ServerAPI.placeOrder,{
        method:'post',
        headers:new Headers({
            'Content-Type':'application/json'
        }),
        body:JSON.stringify({
            "PaymentId":props.navigation.getParam("PaymentId"),
            "photoID":props.navigation.getParam('photoID'),
            "subtotal":"1.00USD",
            "tax":"0.00USD",
            "create_time":props.navigation.getParam('create_time')})
    }).then(res=>{
        return res.json()
    }).then(res=>{
        console.log(res)
        const url = `${ServerAPI.serverPrefix}${res.localUrl}`
        /*console.log(url)*/
        setImageUrl(url)
        /*setImageUrl(res.singleUrl)*/
    }).catch(err=>{
        console.log(err)
    })
}