import { View, Text, SafeAreaView,ScrollView, useWindowDimensions, Platform } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import ImageCard from '../Components/ImageCard/ImageCard'
import BestMatchImageCard from '../Components/BestMatchImageCard/BestMatchImageCard'


export default function BestMatches() {
    const {height:widowHeight} = useWindowDimensions()
  return (
    <View >
      <View style={[tw`bg-purple-500 py-2 h-60 px-5`]} >
        <Text style={[tw`text-3xl text-center text-white`]} >Best Matches</Text>
        <Text style={[tw`text-center my-5 text-white `]} >We are working our magic to find you super compatible people. For now, help us learn by liking people who caught your eye.</Text>
      </View>
      <View style={[tw`bg-purple-500`, { height:100,borderBottomEndRadius:60,borderBottomStartRadius:60}]} >
        </View>
        <View style={{paddingLeft:20,position:"absolute", top:Platform.OS  ==="ios"? `${widowHeight *0.042}%`: `${widowHeight *0.04}%`}}>

        
      <ScrollView horizontal  >
      
        <BestMatchImageCard/>
        <BestMatchImageCard/>
        <BestMatchImageCard/>
     
      </ScrollView>
      <View style={[tw`justify-center self-center my-5 flex-row  `,{columnGap:10}]} >
        <View style={[tw`h-2 w-4 rounded-full bg-purple-500`,{}]} ></View>
        <View style={[tw`h-2 w-4 rounded-full bg-purple-500`,{}]} ></View>
        <View style={[tw`h-2 w-4 rounded-full bg-purple-500`,{}]} ></View>
        <View style={[tw`h-2 w-4 rounded-full bg-purple-500`,{}]} ></View>
      </View>
      </View>
    </View>
  )
}