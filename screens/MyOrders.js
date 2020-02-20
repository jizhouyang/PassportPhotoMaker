import React,{useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,Image,FlatList} from "react-native";
import {getAllOrders} from "../network/GetAllOrders"
import Colors from "../constants/Colors"
import {OrderItem} from "../components/OrderItem"
import ServerAPI from "../constants/ServerAPI"

const myOrders = props =>{
    const [Orders,setOrders] = useState(null)
    const [isGetOrders,setIsGetOrders] = useState(false)
    const [isRefreshing,setIsRefreshing] = useState(false)
    useEffect(()=>{
        getAllOrders(setOrders,setIsGetOrders)
        return ()=>{
            setOrders(null)
            setIsGetOrders(false)
        }
    },[])
    const loadOrders = useCallback(async ()=>{
        setIsRefreshing(true)
        await getAllOrders(setOrders,setIsGetOrders)
        setIsRefreshing(false)
    },[Orders])
    return (
        <View style={styles.container}>
            {isGetOrders?
                <FlatList
                    data = {Orders}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {
                        itemData=>(
                            <OrderItem
                                countryCode={itemData.item.countryCode}
                                photoCode={itemData.item.photoCode}
                                localUrl={`${ServerAPI.serverPrefix}${itemData.item.localUrl}`}
                                paymentInfo={itemData.item.paymentInfo}
                                createTime={itemData.item.createTime}
                            />
                        )
                    }
                    onRefresh={loadOrders}
                    refreshing={isRefreshing}
                />:
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size='large'/>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bgColor,
        alignItems: 'center'
    },
    activityIndicatorContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default myOrders;