import React from 'react';
import {createAppContainer}from "react-navigation";
import {Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import {createDrawerNavigator} from "react-navigation-drawer";
import CustomDrawer from "../components/CustomDrawer";
import {contactNav} from "./ContactNavigator"
import {dashboardBottomTabNavigator} from "./DashboardBottomTabNavigator"

const MainNavigator  = createDrawerNavigator({
    Product:{
        screen:dashboardBottomTabNavigator,
        navigationOptions:{
            drawerIcon:({tintColor})=><MaterialCommunityIcons name = 'desktop-mac-dashboard' size={25}/>,
            drawerLabel:'Dashboard'
            },
    },
    Contact:{
        screen:contactNav,
        navigationOptions:{
            drawerIcon:({tintColor})=><Ionicons name = 'md-contact' size={25}/>,
            drawerLabel:'Contact Us'}
    }
},{
    drawerType:'slide',
    drawerPosition:'right',
    contentComponent:(props)=>(
        <CustomDrawer {...props}/>
    ),
    contentOptions:{
        activeBackgroundColor:'rgba(14,76,148,0.2)',
        activeTintColor:'rgba(14,76,148,100)',
        itemsContainerStyle:{
            marginTop:16,
            marginHorizontal:8
        },
        itemStyle:{
            borderRadius:8
        }
    }

});

export default createAppContainer(MainNavigator);