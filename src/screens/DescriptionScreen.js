import React, {useContext} from 'react';
import {StyleSheet, Dimensions, ToastAndroid, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import ImageHeader from '../components/imageHeader'
const { width, height } = Dimensions.get('window');

const heightNeeded = parseInt(height/2.8)
const loveHeight = parseInt(height/3.1)
console.log("hight needDDDD", heightNeeded)

const DescriptionScreen = (props) =>(
   <>
   <View style={{ backgroundColor:'white'}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
         {/* <StatusBar hidden={true} /> */}
         <StatusBar translucent={true} backgroundColor="transparent"/>
        <ImageHeader navigation={props.navigation} title="Evaluation" home={false}/>
       
    </View>

    <View style={styles.loveIcon}>
    <FontAwesome name="heart" size={19} color="white" style={styles.love}/>
    </View>
  
     <ScrollView style={{width:'100%',borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor:'white'}}>
     <View style={{marginTop:10, marginHorizontal:15}}>
     <Text style={{marginVertical:20, fontSize:20, fontFamily:'Candara', fontWeight:'bold'}}>Flower Moon Cake</Text>
    <View style={{flexDirection:'row', marginBottom:17}}>
    <FontAwesome name="star" size={14} color="#f98845" style={styles.love}/>
    <FontAwesome name="star" size={14} color="#f98845" style={styles.love}/>
    <FontAwesome name="star" size={14} color="#f98845" style={styles.love}/>
    <FontAwesome name="star" size={14} color="#f98845" style={styles.love}/>
    <FontAwesome name="star" size={14} color="#DCDCD2" style={styles.love}/>
    <Text style={{marginLeft:10, fontSize:10, fontWeight:'bold', color:"#f98845"}}>8.0</Text>
    </View>
     <Text style={{color:"#a79d9d",fontFamily:13, fontFamily:'Candara', marginRight:50}}>
         The Flowers and the Mooncakes from chinese, so delicious that they remind people of this taste
    </Text>
     </View>
    <View style={{flexDirection: 'row', marginHorizontal:15, marginTop:30}}>
        <View style={{flex:1}}>
            {/* image */}
            <Image
        style={{width:50, height:50, borderRadius:30}}
        source={require('../../assets/images/lady9.jpg')}/>
        </View>

        <View style={{flex:4, marginTop:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Candara',fontSize:15, fontWeight:'bold'}}>
                Theoderic Onipe
            </Text>
            <Text style={{fontFamily:'Candara',fontSize:12, color:"#a79d9d",fontWeight:'bold'}}>
                10-11 15:54
            </Text>
            
            </View>
            <Text style={{fontFamily:'Candara',fontSize:14, fontWeight:'600',color:"#BFBFB9",}}>
                This is the best moon cake I have ever eaten. I have tasted it in other countries,
                the best thing is to eat in Nigeria, it is an empire that eats
            </Text>
{/* Content Goes here */}
        </View>
    </View>
    <View style={{flexDirection: 'row', marginHorizontal:15, marginTop:30}}>
        <View style={{flex:1}}>
            {/* image */}
            <Image
        style={{width:50, height:50, borderRadius:30}}
        source={require('../../assets/images/lady6.jpg')}/>
        </View>

        <View style={{flex:4, marginTop:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Candara',fontSize:15, fontWeight:'bold'}}>
                Theoderic Onipe
            </Text>
            <Text style={{fontFamily:'Candara',fontSize:12, color:"#a79d9d",fontWeight:'bold'}}>
                10-11 15:54
            </Text>
            
            </View>
            <Text style={{fontFamily:'Candara',fontSize:14, fontWeight:'600',color:"#BFBFB9",}}>
                This is the best moon cake I have ever eaten. I have tasted it in other countries,
                the best thing is to eat in Nigeria, it is an empire that eats
            </Text>
{/* Content Goes here */}
        </View>
    </View>
    <View style={{flexDirection: 'row', marginHorizontal:15, marginTop:30}}>
        <View style={{flex:1}}>
            {/* image */}
            <Image
        style={{width:50, height:50, borderRadius:30}}
        source={require('../../assets/images/lady7.jpg')}/>
        </View>

        <View style={{flex:4, marginTop:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Candara',fontSize:15, fontWeight:'bold'}}>
                Theoderic Onipe
            </Text>
            <Text style={{fontFamily:'Candara',fontSize:12, color:"#a79d9d",fontWeight:'bold'}}>
                10-11 15:54
            </Text>
            
            </View>
            <Text style={{fontFamily:'Candara',fontSize:14, fontWeight:'600',color:"#BFBFB9",}}>
                This is the best moon cake I have ever eaten. I have tasted it in other countries,
                the best thing is to eat in Nigeria, it is an empire that eats
            </Text>
{/* Content Goes here */}
        </View>
    </View>
    <View style={{flexDirection: 'row', marginHorizontal:15, marginTop:30}}>
        <View style={{flex:1}}>
            {/* image */}
            <Image
        style={{width:50, height:50, borderRadius:30}}
        source={require('../../assets/images/lady8.jpg')}/>
        </View>

        <View style={{flex:4, marginTop:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Candara',fontSize:15, fontWeight:'bold'}}>
                Theoderic Onipe
            </Text>
            <Text style={{fontFamily:'Candara',fontSize:12, color:"#a79d9d",fontWeight:'bold'}}>
                10-11 15:54
            </Text>
            
            </View>
            <Text style={{fontFamily:'Candara',fontSize:14, fontWeight:'600',color:"#BFBFB9",}}>
                This is the best moon cake I have ever eaten. I have tasted it in other countries,
                the best thing is to eat in Nigeria, it is an empire that eats
            </Text>
{/* Content Goes here */}
        </View>
    </View>

    </ScrollView>
   </>
);



export default DescriptionScreen;
// 
const styles = StyleSheet.create({
loveIcon: {
    position:'absolute',
    top:loveHeight, 
    width:40, 
    height:40, 
    borderRadius:30,
    justifyContent:'center',
    right:'30%',
    left: '46%',
    alignItems:'center',
    zIndex:2000,
    backgroundColor:'#fe5655',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
},

love: {
    
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,

elevation: 22,
},

})