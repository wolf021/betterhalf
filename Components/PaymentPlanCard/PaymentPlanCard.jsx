//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

// create a component
const PaymentPlanCard = ({color, title,description, price}) => {
    return (
        <View style={[styles.container, {backgroundColor:color}]}  >
            <Text style={{ fontSize:25, color:"white", fontWeight:"600" }} >{title}</Text>
            <Text style={{ fontSize:15, color:"white", fontWeight:"600",textAlign:"center" }}>{description}</Text>
            <TouchableOpacity style={{backgroundColor:"white", padding:10, borderRadius:50}} >
                <Text>
                    Upgrade from {price}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        marginVertical:20,
        marginHorizontal:20,
        
        width: 350,
         height:160,
        alignItems:"center",
        borderRadius:15,
        paddingVertical:15,
        gap:10,
        paddingHorizontal:20,
    },
});

//make this component available to the app
export default PaymentPlanCard;
