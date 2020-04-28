import React, {useContext} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function Header(props) {
   console.log("NNNNNNNNNN",props.navigation)
  const {goBack} = props.navigation
  return (
   
        <View style={styles.titleBar}>
            {props.home &&
            <TouchableOpacity style={styles.headerIcon}>
            <Fontisto name="home" size={20} color="#3e3e3e" />
            </TouchableOpacity>
            }
            {!props.home &&
            <TouchableOpacity style={styles.headerIcon} onPress={()=>goBack()}>
            <Fontisto name="angle-left" size={20} color="#3e3e3e" />
            </TouchableOpacity>
            }
            

            <Text style={styles.text}>{props.title}</Text>
            <TouchableOpacity style={styles.headerIcon}>
                <FontAwesome5 name="search" size={20} color="#cccccc" />
            </TouchableOpacity>
        </View>
   
  );
}

const styles = StyleSheet.create({
    headerIcon: {
        marginTop:6
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
        marginTop: 18,
        marginHorizontal: 12,
        marginBottom:10
    },
    



})