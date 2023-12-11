//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// create a component
const PaymentGrid = ({isPremium,paymentFeatures,isBoost}) => {
    return (
        <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%", paddingHorizontal:20,marginVertical:10}}>
        <Text style={{color:"#9f7aea", fontWeight:"600",width:"40%"}} >{paymentFeatures}</Text>
        <AntDesign name="check" size={24} color={`${!isPremium? "gray": "#9f7aea"}`}  />
        <AntDesign name="check" size={24}  color={`${!isBoost? "gray": "#9f7aea"}`}  />
    </View>
    );
};



//make this component available to the app
export default PaymentGrid;
