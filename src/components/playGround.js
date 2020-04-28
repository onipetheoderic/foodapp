import React, {useContext} from 'react';
import {StyleSheet, Dimensions,ToastAndroid, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import { CounterContext } from "../../store";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Header from '../components/header';




export default function PlayGround(props) {
    const {state} = useContext(CounterContext)
    console.log("this is the count", state)
    // const [count, setCount] = useContext(CounterContext);

    // const increment = () => {
    //   setCount(count + 1);
    // };
    
    // const decrement = () => {
    //   setCount(count - 1);
    // };
    
  return (
    <SafeAreaView>
        <View style={{backgroundColor:'white', marginBottom:10}}>
            <Header title={props.title} navigation={props.navigation} home={props.home}/>
        </View>
  
            <ScrollView style={{backgroundColor:'#ececec'}}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
                {props.children}            
            </ScrollView>                
        <View style={{backgroundColor:'rgba(255, 185, 85,0.7)', 
        top:props.height-110, borderRadius:30, right:50, position:'absolute', 
        width:60, height:60, justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>props.navigate('SelectedProductScreen')}>         
        <FontAwesome5 name="cart-plus" size={25} color="white" style={{marginLeft:15}}/>
        <Text style={{position:'absolute', top:0, right:10, color:'red', fontWeight:'bold'}}>
            {state.selectedItems.length}
        </Text>
        </TouchableOpacity>
     </View>
    

   </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
    headerIcon: {
        marginTop:6
    },

    titleBar: {
        flexDirection: 'row',
    
    },
    



})