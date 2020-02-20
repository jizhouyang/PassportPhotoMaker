import {createStackNavigator} from "react-navigation-stack"
import Contact from "../screens/Contact"
import {defaultStackNavOptions} from "../constants/StackNavigatorOptions"

export const contactNav = createStackNavigator({
    contactUs:{screen:Contact,navigationOptions:{
            headerTitle:"Contact US"
        }}
},{defaultNavigationOptions:defaultStackNavOptions});