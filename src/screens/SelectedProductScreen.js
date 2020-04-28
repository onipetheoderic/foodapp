/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import { CounterContext } from "../../store";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  PixelRatio,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import {Foods} from '../api/foods'
import Header from '../components/header';
import CountDisplay from '../components/countDisplay';
import FoodCard from '../components/foodCard'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PaymentButton from '../components/PaymentButton'
import PlayGround from '../components/playGround'
import CartItemCard from '../components/cartItemCard'
import Entypo from 'react-native-vector-icons/Entypo'

const SelectedProductScreen = (props) => {
    
    const { width, height } = Dimensions.get('window');
    
    const globalState = useContext(CounterContext);

    const {state, dispatch } = globalState;  
    const {selectedItems} = state
    console.log("selectedItems",selectedItems.length)
    var reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);


console.log("lenght",selectedItems.length)
const showPaymentTotal = selectedItems.length===0?false:true
  return (
    <>
      

<PlayGround home={false} navigation={props.navigation} title="Cart" height={height} width={width} navigate={props.navigation.navigate}>
{selectedItems.map((items, index) => {
    console.log("items", items)
   return(
<CartItemCard id={items.id} image={items.image} quantity={items.quantity} name={items.name} price={items.productPrice} />
  
   )
     })}
{showPaymentTotal &&
<View>
     <View style={{flexDirection:'row', justifyContent:'space-between' }}>
         <View style={{flex:2}}>

         </View>
        <View style={{flex:3, paddingLeft:20}}>
        <Text style={{fontFamily:'Candara', color:'#b3b0b0', marginBottom:10,fontSize:17}}>Freight</Text>
        <Text style={{fontFamily:'Candara', fontSize:17, marginBottom:3, marginTop:6}}>Total Amount</Text>
        </View>

        <View style={{flex:2, flexWrap:'nowrap'}}>
        <Text style={{fontFamily:'Candara', textAlign:'right', color:'#b3b0b0', marginBottom:10,paddingRight:10,fontSize:15}}>₦ 10.00</Text>
        <Text style={{fontFamily:'Candara',textAlign:'right', color:'#ff9658', fontSize:16,paddingRight:10, marginTop:6}}>₦ {state.total}</Text>
        
        </View>
     </View>
     <PaymentButton title="Make a Payment" />
     </View>
     }
</PlayGround>
</>
  );
};



export default SelectedProductScreen;
