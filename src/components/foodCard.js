import React, { useState, useContext} from "react";
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import ImageLoad from '../components/ImageLoad';
import { CounterContext } from "../../store";
export default function FoodCard(props) {
    const [clicked, setClicked] = useState(false);
    
    var toggleClick = clicked===false?"white":"#fc5a58";
    const globalState = useContext(CounterContext);
    // const [count, setCount] = useContext(CounterContext);

    // const increment = () => {
    //   setCount(count + 1);
    // };
    
    // const decrement = () => {
    //   setCount(count - 1);
    // };
    // props.name, props.id, props.description, props.price, props.image

    showToastWithGravity = (msg) => {
        ToastAndroid.showWithGravity(
          msg,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    const selectItem = (name, id, description, price, image) => {
        const {state, dispatch } = globalState;  
        // console.log("Add to Cart", state.selectedItems)
        let stateItems = state.selectedItems
        var existingItem = [];
        for(var i in stateItems){
            if(stateItems[i].id===id){
                existingItem.push(stateItems[i])
            }

        }
        if(existingItem.length>=1){
            let msg = `${name} already Added to Cart`
            showToastWithGravity(msg)
        }
        else {
            let msg = `${name} added to Cart`
            showToastWithGravity(msg)
            console.log("New Item", state.selectedItems)
            let payload = {productPrice:price, quantity:1, name:name, id:id, description:description, price:price, image:image}
            dispatch({ type: 'selectItem', payload:payload })
        }
     
      };

      gotoDescription = () => {
          console.log("cliekd", props.navigation)
          props.navigation.navigate("DescriptionScreen")
      }

  return (
   
        <View style={styles.cardParent}>
            <View>
                <TouchableOpacity onPress={()=>gotoDescription()}>
            <ImageLoad
    style={{width:'100%', height:135, borderTopLeftRadius:9,borderTopRightRadius:9 }}
    loadingStyle={{ size: 'large', color: '#fc5a58' }}
    source={{uri: props.image}}
/>

</TouchableOpacity>
            {/* <Image source={{uri: props.image}}
        style={{width:'100%', height:135, borderTopLeftRadius:9,borderTopRightRadius:9 }} />
         */}
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{marginLeft:10, marginTop:4}}>
                <Text style={{fontFamily:'Candara', fontSize:15}}>{props.name}</Text>
                <Text style={{fontFamily:'Candara', color:'#88b0f9', fontSize:15}}>₦ {props.price}</Text>
                
                </View>
              
                <TouchableOpacity style={{marginRight:10, marginTop:14}} onPress={()=>selectItem(props.name, props.id, props.description, props.price, props.image)}>
                <FontAwesome5 name="cart-plus" size={17} color="red" />
                </TouchableOpacity>
               
            </View>
            <View style={{right:10,top:10,position:'absolute'}}>
                <TouchableOpacity onPress={()=>setClicked(!clicked)}>
            <Fontisto name="heart" size={15} color={toggleClick} />
            </TouchableOpacity>
            </View>
            <View style={{
               position:'absolute',
                backgroundColor:'#ececec', 
                top:'40%',
                borderRadius:20,
                width:20,
                left:-6,
                height:20}}/>


                 <View style={{
               
               backgroundColor:'#ececec', 
               top:'40%',
               borderRadius:20,
                width:20,
                position:'absolute',
                right:-6,
               height:20}}/>
        </View>
   
  );
}

const styles = StyleSheet.create({
    cardParent: {
        marginVertical:10,
        height:190,
        borderRadius:10,
        backgroundColor:'white',
        width:'42%',
      

    },
    
    text: {
        fontFamily: "Candara",
        color: "#3e3e3e",
        fontSize:28
    },
    image: {
        flex:1,
        width: undefined,
        height: undefined,
    },
    subText: {
        fontSize: 12,
        color: '#AEB5BC',
        textTransform: 'uppercase',
        fontWeight: '500'
    },  
    titleBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    



})