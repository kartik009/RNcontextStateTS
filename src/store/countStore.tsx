import React, { useReducer, createContext } from "react";
import { INCREMENT,DECREMENT } from "./types";
import { Props, ActionProps } from '../comman/commanInterface';

const initialCount = {count:0 as Number} ;

const initialContext = [{...initialCount},()=>{}];

const countStore = createContext(initialContext);

// console.log("APP LEVEL countStore :",countStore);

const { Provider } = countStore;


const CountStateProvider  = (props:any)=>{

    const [countState, dispatch] = useReducer((state:any,action:ActionProps)=>{
        switch(action.type){
            case INCREMENT:
                let incrementC = state.count;
                incrementC +=1;   
                return {...state,count:incrementC as Number};
            case DECREMENT:
                let c = state.count;
                c -=1;                 
                return {...state,count:c as Number};
            default :
                return state;
        };
    } ,initialCount);

    return (<Provider value={{countState,dispatch}}>{props.children}</Provider>);
}

//Not working
const CountHoc = (Comp:any)=>(<CountStateProvider><Comp  /></CountStateProvider>);

export {countStore,CountStateProvider};