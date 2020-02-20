import Colors from "./Colors"
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import React from 'react';
export const defaultStackNavOptions =navData=> {
    return {
        mode:"modal",
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    }
};