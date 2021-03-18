import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NameStateProvider } from "../store/index";

//Screens 
import NameInput from "../screen/NameInput";

const NameStack = createStackNavigator();

const NameSt:React.FC<any>=(props)=>{
    return(
        <NameStateProvider>
            <NameStack.Navigator headerMode='none'>
                 
                    <NameStack.Screen name="NameInput" component={NameInput} />
                
            </NameStack.Navigator>
        </NameStateProvider>
        
    );
}

export default NameSt;