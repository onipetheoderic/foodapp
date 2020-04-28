import React, { useState, useContext} from "react";
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import ImageLoad from '../components/ImageLoad';
import { CounterContext } from "../../store";


export default function CartItemCard(props) {
    const [clicked, setClicked] = useState(false);
    
    var toggleClick = clicked===false?"white":"#fc5a58";
    const globalState = useContext(CounterContext);
    const { state, dispatch } = globalState; 
    
    showToastWithGravity = (msg) => {
        ToastAndroid.showWithGravity(
          msg,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
      var reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    const incrementQuantity = (id) => {     
        let myArray = state.selectedItems;
           
            var objIndex = myArray.map(function(x) {return x.id; }).indexOf(id);
            const productQuantity = myArray[objIndex].quantity+1
            myArray[objIndex].quantity=myArray[objIndex].quantity+1
            // console.log("After increment: ", myArray[objIndex].quantity)
            myArray[objIndex].productPrice = myArray[objIndex].price*myArray[objIndex].quantity;

            
           
            let allVals = [];
            for(var i in myArray){
                allVals.push(myArray[i].productPrice)
            }
            let reducedVal = allVals.reduce(reducer)
            console.log(reducedVal)
            let total = reducedVal
            console.log("After update: ", myArray[objIndex].quantity, productQuantity)   
            dispatch({ type: 'incrementQty', payload:{myArray:myArray, total:total} })
    }
    const decrementQuantity = (id) => {
        let myArray2 = state.selectedItems;
      
        var objIndex2 = myArray2.map(function(x) {return x.id; }).indexOf(id);
        console.log("Before update: ", myArray2)

        if(myArray2[objIndex2].quantity>1){
          myArray2[objIndex2].quantity-=1
          myArray2[objIndex2].productPrice = myArray2[objIndex2].price*myArray2[objIndex2].quantity
          
        }
        else if(myArray2[objIndex2].quantity==1) {
          myArray2[objIndex2].quantity=1
          myArray2[objIndex2].productPrice = myArray2[objIndex2].price*myArray2[objIndex2].quantity
          
        }
        let allVals = [];
        for(var i in myArray2){
            allVals.push(myArray2[i].productPrice)
        }
        let reducedVal = allVals.reduce(reducer)
        console.log(reducedVal)
        let total = reducedVal
       

        dispatch({ type: 'decrementQty', payload:{myArray2:myArray2, total:total} })
    }

  


  return (
   
        <View style={styles.cardParent}>
            <View style={{flex:2}}>
            <ImageLoad
    style={{width:'100%', height:95, borderTopLeftRadius:9,borderTopRightRadius:9 }}
    loadingStyle={{ size: 'large', color: '#fc5a58' }}
    source={{uri: props.image}}
/>
            </View>

            <View style={{flex:3, marginLeft:17}}>
                <Text style={{fontFamily:'Candara', fontSize:18, marginBottom:3, marginTop:6}}>{props.name}</Text>
                <Text style={{fontFamily:'Candara', color:'#b3b0b0', marginBottom:10,fontSize:12}}>Size: L</Text>
                <View style={{flexDirection:'row', 
                justifyContent:'space-between', 
                borderWidth:1,
                borderColor:'#c6c6c6',
                width:'44%',
                height:23,
                borderRadius:3}}>
                     <TouchableOpacity onPress={()=>decrementQuantity(props.id)}>
                    <FontAwesome5 name="minus" size={7} style={{marginLeft:6, marginTop:7}}/>
                    </TouchableOpacity>

                    <Text style={{fontWeight:'bold', fontSize:12, marginTop:2}}>{props.quantity}</Text>
                    
                    <TouchableOpacity onPress={()=>incrementQuantity(props.id)}>
                    <FontAwesome5 name="plus" size={7} style={{marginRight:6, marginTop:7}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flex:2, justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontWeight:'bold',fontFamily:'Candara', color:'#88b0f9', fontSize:15}}>₦ {props.price}</Text>
            </View>
            

        </View>
   
  );
}

const styles = StyleSheet.create({
    cardParent: {
        marginVertical:10,
        height:95,
        marginHorizontal:11,
        borderRadius:10,
        backgroundColor:'white',
        width:'100%',
        flexDirection:'row',
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