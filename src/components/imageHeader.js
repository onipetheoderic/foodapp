import React from "react";
import {Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import ImageOverlay from "react-native-image-overlay";

const image = { uri: "https://i.keaitupian.net/up/66/e8/dc/8fbafa8d116063f8cf468ba013dce866.jpg" };
const { width, height } = Dimensions.get('window');

const heightNeeded = parseInt(height/2.8)
console.log("hight need", heightNeeded)

export default ImageHeader = (props) => {
    const {goBack} = props.navigation
    return (

        <View style={{height:heightNeeded, }}>
          <ImageOverlay 
          source={image} overlayAlpha={0.3} 
          contentPosition="top" 
          style={{height:heightNeeded, resizeMode:'cover'}}>
      
          <View style={styles.titleBar}>
                  {props.home &&
                  <TouchableOpacity style={styles.headerIcon}>
                  <Fontisto name="home" size={20} color="#3e3e3e" />
                  </TouchableOpacity>
                  }
                  {!props.home &&
                  <TouchableOpacity style={styles.headerIcon} onPress={()=>goBack()}>
                  <Fontisto name="angle-left" size={20} color="white" />
                  </TouchableOpacity>
                  }
                  
      
                  <Text style={styles.text}>{props.title}</Text>
                  <TouchableOpacity style={styles.headerIcon}>
                      <FontAwesome5 name="ellipsis-h" size={20} color="white" />
                  </TouchableOpacity>
              </View>
          </ImageOverlay>
      
        </View>
      );
} 

const styles = StyleSheet.create({
  
    headerIcon: {
        marginTop:6,
        margin:12
    },
    
    text: {
        fontFamily: "Candara",
        color: 'white',
        fontSize:28
    },
 
    titleBar: {
        flexDirection: 'row',
        flex: 1,     
        width:'100%',  
        justifyContent: "space-between",
       marginTop:35,
        marginHorizontal: 12,
        marginBottom:10
    },
    



});