import ServerAPI from "../constants/ServerAPI"

export const getAllOrders=(setOrders,setIsGetOrders)=>{
    fetch(ServerAPI.getAllOrders,{
        method:'get'
    }).then(res=>{
        return res.json()
    }).then(res=>{
        console.log(res)
        setOrders(res.map(item=> JSON.parse(item)))
        setIsGetOrders(true)
    }).catch(err=>{
        console.log(err)
    })
};