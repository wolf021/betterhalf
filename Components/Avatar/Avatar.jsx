//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Avatarr from "../../assets/avatar.png"

// create a component
const Avatar = () => {
    return (
        <View>
        <View style={styles.container}>
            <Image style={{width:"100%", height:"100%"}}  source={Avatarr}  />
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin:20,
       width:150,
       height:150,
       alignItems:"center",
       overflow:"hidden",
       backgroundColor:"green",
       borderRadius:100,
       borderWidth:3,
       borderColor:"#9f7aead9"
       
       
    },
});

//make this component available to the app
export default Avatar;
