//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../Components/Avatar/Avatar';
import { SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PaymentPlanCard from '../Components/PaymentPlanCard/PaymentPlanCard';
import { ScrollView } from 'react-native';
import { PaymentFeatures} from '../StaticData/StaticData'
import PaymentGrid from '../Components/PaymentGrid/PaymentGrid';
import tw from 'tailwind-react-native-classnames';

// create a component
const ProfileScreen = () => {
    isPremium= false
    isBoost= false
    isProfileCompleted = true
    ProfileCompletedProgress = 100
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{flex:1, width:"100%", height:"auto",alignItems:"center"}} >
                <Avatar/>
                <View style={[tw`bg-purple-500`,{ padding:5, borderRadius:50,position:"absolute",top:"16%" }]} >
                <Text style={{color:"white", fontWeight:700}} >{ProfileCompletedProgress}%</Text>
                </View>
                <View style={{flexDirection:"row", gap:10, alignItems:"center" }} >
                    <Text style={[tw`text-purple-500`,{fontSize:20, fontWeight:"600"}]} >Zoye Jones, 33</Text>
                    <Entypo name="shield" size={24} color={`${isPremium? "#9f7aea": "grey"}`} />
                </View>
                <TouchableOpacity style={{backgroundColor:"grey", padding:7, borderRadius:50, marginVertical:10}} >
                <Text style={{color:"white", fontWeight:700}} >{`${isProfileCompleted? "Complete Your Profile" : "Edit Profile"}`}</Text>
                </TouchableOpacity>
                <ScrollView style={{width:"100%", maxHeight:200 }} horizontal >
              <PaymentPlanCard color={"#9f7aea"} title={"Premium"} description={"Unlock all your features to be in complete control of your experiance"} price={"15.99"} />
              <PaymentPlanCard color={"teal"} title={"Boost"} description={"More Chances to Match with exxtra features to boost your profile "} price={"5.99"} />
                </ScrollView>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%", paddingHorizontal:20,marginVertical:10}}>
                    <Text style={{color:"gray", fontWeight:"700"}} >What you Will Get</Text>
                    <Text style={{color:`${isPremium ? "#9f7aea" : "grey"}`, fontWeight:"600"}} >Premium</Text>
                    <Text style={{color:`${isBoost ? "#9f7aea" : "grey"}`, fontWeight:"600"}} >Boost</Text>
                </View>
                <View>

                </View>
                {PaymentFeatures.map(feature=>(

              <PaymentGrid paymentFeatures={feature.features}  key={feature.features} isBoost={isBoost}  isPremium={isPremium} />
                ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default ProfileScreen;
