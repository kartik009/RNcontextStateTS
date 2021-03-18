import React from "react";;
import { createStackNavigator } from "@react-navigation/stack";
import { CountStateProvider } from "../store/index";

//Screens
import Count from "../screen/Count";

const CountStack = createStackNavigator();

const CountSt:React.FC<any>=(props)=>{
    return (
        <CountStateProvider>
            <CountStack.Navigator headerMode='none'>
                
                    <CountStack.Screen name="Count" component={Count}  />
                
            </CountStack.Navigator>
        </CountStateProvider>
    );
}

export default CountSt;