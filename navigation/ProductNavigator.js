import {createStackNavigator} from "react-navigation-stack"
import MainPage from "../screens/MainPage"
import ImgPicker from "../screens/ImgPicker"
import ConfirmationPage from "../screens/ConfirmationPage"
import {defaultStackNavOptions} from "../constants/StackNavigatorOptions"
import PaymentPage from "../screens/PaymentPage"
import {PaymentSuccess} from "../screens/PaymentUponSuccessPage"
import React from 'react';
import {CustomMainPageHeader} from "../components/CustomMainPageHeader"
import {categoryOfPassportPhotos} from "../constants/Categories"
export const productNavigator = createStackNavigator(
    {
        menu:{
            screen:(props)=><MainPage {...props} products={categoryOfPassportPhotos}/>,
            navigationOptions:{
                headerTitle:'Passport Photo Maker',
                header:(props)=><CustomMainPageHeader {...props}/>
            }
        },
        takePhotos:{
            screen:ImgPicker
        },
        confirmationPage:{
            screen:ConfirmationPage,
            navigationOptions:{
                headerTitle:'Check Out'
            }
        },
        PaymentPage:{
            screen:PaymentPage,
            navigationOptions:{
                headerTitle:"PayPal Payment"
            }
        },
        PaymentSuccess:{
            screen:PaymentSuccess,
            navigationOptions:{
                headerTitle:"Successful Payment"
            }
        }
    },
    {defaultNavigationOptions:defaultStackNavOptions}
);