import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import DefaultImg from "../../assets/default.jpg"

export default function BestMatchImageCard() {
    const {width:widowWidth} = useWindowDimensions()
  return (
    <View style={[tw` m-1 mx-2 rounded-xl`,{width:330, height:500,overflow:"hidden"}]} >
      <Image style={{width:"100%", height:"100%", objectFit:"cover"}}  source={DefaultImg}  />
      <Text style={[tw`text-xl font-bold`,{position:"absolute", bottom:20, left:10, zIndex:10, color:"white",}]} >Carol Jane,31</Text>
    </View>
  )
}