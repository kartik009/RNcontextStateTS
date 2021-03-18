import React,{ createContext, useReducer } from "react";
import { ActionProps, Props } from "../comman/commanInterface";
import { SET_NAME,SET_TOKEN } from "./types";

interface NameProps{
    token:String;
    name:String;
};

const nameStore : NameProps = { name:'', token:'' };

const initialContext = [{...nameStore},()=>{}];

const nameContext = createContext(initialContext);

const { Provider } = nameContext;

const NameStateProvider = (props:Props) =>{
    const [nameState, dispatch] = useReducer(
        (state:NameProps,action:ActionProps)=>{
            switch(action.type){
                case SET_NAME:
                    console.log("Name : ",action.payload);
                    return {...state,name:action.payload};
                case SET_TOKEN:
                    return {...state,token:action.payload};
                default:
                    return state;
            };

    },nameStore);
    
    return(<Provider value={{nameState, dispatch}}>{props.children}</Provider>);
}

export{
    nameContext,NameStateProvider
}