import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStateProvider, globalContext } from "../store/index";

import { CountStateProvider,NameStateProvider, } from "../store/index";

//Screens
import Count from "../screen/Count";
import NameInput from "../screen/NameInput";

// //Stacks
import CountSt from "./countStack";

import NameSt from "./nameStack";

const MainStack = createStackNavigator();

const AppRoute: React.FC<any>=(props)=>{

    const context = useContext(globalContext);

    console.log("AppRoutes : context",context);

    const [ globalState,dispatch ] =context;
    const { isLogin }  = globalState as any;

    console.log("AppRoutes : globalState",globalState,"\n isLogin :",isLogin);

    return (
    <GlobalStateProvider>
        <NavigationContainer>        
            {/* <MainStack.Navigator initialRouteName='Count' headerMode='none' >
                    {}
            </MainStack.Navigator> */}
            {/* {isLogin ?<CountSt />:<NameSt/>} */}
            {isLogin?
            // (<CountStateProvider>
            //     <CountStack.Navigator headerMode='none'>                    
            //             <CountStack.Screen name="Count" component={Count}  />                    
            //     </CountStack.Navigator>
            // </CountStateProvider>)
            (<CountSt />)
            :(<NameSt />)
        }
        </NavigationContainer>
    </GlobalStateProvider>);
}


export default AppRoute