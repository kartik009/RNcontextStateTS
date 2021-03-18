import React,{useContext, useState} from "react";
import { Text, View, StyleSheet, Pressable,TextInput } from "react-native";
import {  nameContext, SET_NAME, SET_TOKEN } from "../store/index";
// export interface Props{

// };

const NameInput :React.FC<any> = (props)=>{

    console.log(" NameInput Props :",props );
    const context = useContext(nameContext);
    console.log("NameInput Screen -> context",context);

    const { nameState, dispatch } = context as any;

    const [name,setName] = useState(nameState.name);

    const [finalName,setFinal] = useState(nameState.name);

    const saveName = (val:String)=>{
        dispatch({type:SET_NAME, payload:val});
        setFinal(val.toString());
    }
    const navigateTO = ()=>{
        props.navigation.navigate('Count');
    }

    return(
        <View style={styles.central}>            
            <Text>{"Hello ,"+finalName}</Text>
            <View style={styles.row}>
                <TextInput placeholder='enter name' onChangeText={setName} onSubmitEditing={()=>saveName(name)} />
                <Pressable onPress={()=>saveName(name)} style={{marginHorizontal:10, paddingHorizontal:30,paddingVertical:5, backgroundColor:'#afa'}}>
                    <Text>Press</Text>
                </Pressable>
            </View>
            <View style={{marginTop:20}}>
                <Pressable onPress={navigateTO} style={{paddingHorizontal:30,paddingVertical:8, backgroundColor:'#0af'}}>
                    <Text>goto Count</Text>
                </Pressable>
            </View>

        </View>);

}

// const NameInput:React.FC<any>=(props)=>{ return(<NameStateProvider><NameInputFunc {...props} /></NameStateProvider>); }

export default NameInput;

const styles = StyleSheet.create({
    central:{justifyContent:'center',alignItems:'center',flex:1},
    row:{flexDirection:'row'},
    marginTen:{marginHorizontal:10,alignSelf:'center'},
})