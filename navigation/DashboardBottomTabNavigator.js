import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import {productNavigator} from "./ProductNavigator"
import {FontAwesome, Ionicons} from "@expo/vector-icons"
import Colors from "../constants/Colors"
import {ordersNavigator} from "./OrdersNavigator"
import React from 'react';
export const dashboardBottomTabNavigator = createMaterialBottomTabNavigator({
    Product:{screen:productNavigator,navigationOptions:{
            tabBarIcon:(tabInfo) =>{
                return <Ionicons name = 'ios-home' size={25} color = {tabInfo.tintColor}/>
            },
            tabBarColor:Colors.primaryColor
        }

    },
    Orders:{screen:ordersNavigator,navigationOptions:{
            tabBarIcon:(tabInfo) =>{
                return <FontAwesome name = 'shopping-cart' size={25} color = {tabInfo.tintColor}/>
            },
            tabBarColor:Colors.buttonColor
        }
    }
},{
    shifting:true,
    barStyle:{backgroundColor:Colors.primaryColor}

});