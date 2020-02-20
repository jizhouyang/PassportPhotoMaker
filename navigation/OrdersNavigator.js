import {createStackNavigator} from "react-navigation-stack"
import myOrders from "../screens/MyOrders"
import {defaultStackNavOptions} from "../constants/StackNavigatorOptions"

export const ordersNavigator = createStackNavigator(
    {
        orders:{
            screen:myOrders,
            navigationOptions:{
                headerTitle:'My Orders'
            }
        }},{defaultNavigationOptions:defaultStackNavOptions}
);