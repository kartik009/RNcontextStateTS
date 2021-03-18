import React, { createContext,useReducer } from "react";
import { Props, ActionProps } from "../comman/commanInterface";
import { SET_COUNT, SET_TOKEN, SET_LOGIN } from "./types";

interface initialStatetype{
    token:String;
    countValue:Number;
    isLogin:Boolean;
}


const initialState : initialStatetype = { countValue:0, token:'',isLogin:false};

const initialContext = [{...initialState},()=>{}];

interface GS extends Props{

}

const globalContext = createContext(initialContext);

const { Provider } = globalContext;


const GlobalStateProvider =(props:GS)=>{

    const { children} = props;

    const [globalState,dispatch] = useReducer((state:initialStatetype,action:ActionProps)=>{
        switch(action.type){
            case SET_COUNT:             
                let c =  action.payload;
                return {...state,countValue:c};
            case SET_TOKEN:
                let t = action.payload;
                return {...state,token:t};
            case SET_LOGIN:
                return {...state,isLogin:action.payload};
            default:
                return state;
        };

    },initialState);

    return<Provider value={{globalState,dispatch}}>{children}</Provider>;
}

export {
    globalContext,GlobalStateProvider
}