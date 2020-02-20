import React from 'react';
import MainNavigator from "./navigation/MainNavigator";
import {enableScreens} from "react-native-screens";

enableScreens();
export default function App () {
    return (
        <MainNavigator/>
    );
};
