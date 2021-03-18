import React,{useContext} from "react";
import { Text, View, StyleSheet,Button } from "react-native";
import { countStore, CountStateProvider, DECREMENT,INCREMENT,SET_COUNT,GlobalStateProvider } from "../store/index";

// export interface Props{

// };

const Count :React.FC<any> = (props)=>{

    // console.log(" Count Props :",props );
    const context = useContext(countStore);
    console.log("Count Screen -> context",context);

    const { countState:{count}, dispatch } = context as any;

    const navigateTO = ()=>{
        props.navigation.navigate('NameInput');
    }

    return(
        <View style={styles.central}>
            <View style={styles.row} >
                <Button title="+" onPress={()=>dispatch({type:INCREMENT})} />
                <Text style={[styles.marginTen]}>{count}</Text>
                <Button title="-" onPress={()=>dispatch({type:DECREMENT})}/>
            </View>
            <View style={{marginTop:10}}>
                <Button color='#0045ff' title={'goto name Screen'} onPress={navigateTO} /> 
            </View>
        </View>);

}

// const  Count : React.FC<any>=(props) =>(<CountStateProvider><CountFunction {...props} /></CountStateProvider>);

//Not working single function hoc
// const Count = CountState(CountFunction);

export default Count;

const styles = StyleSheet.create({
    central:{justifyContent:'center',alignItems:'center',flex:1},
    row:{flexDirection:'row'},
    marginTen:{marginHorizontal:10,alignSelf:'center'},
})