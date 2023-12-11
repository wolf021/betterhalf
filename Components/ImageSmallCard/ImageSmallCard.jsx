import { View, Text, Image, Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'
import DefaultImg from "../../assets/default.jpg"
import tw from 'tailwind-react-native-classnames'
export default function ImageSmallCard() {
    const {width:widowWidth} = useWindowDimensions()
  return (
     <View style={[tw` m-1 rounded-xl`,{width:`${widowWidth*0.11}%`, height:250,overflow:"hidden"}]} >
      <Image style={{width:"100%", height:"100%", objectFit:"cover"}}  source={DefaultImg}  />
      <Text style={[tw`text-xl font-semibold`,{position:"absolute", bottom:10, left:10, zIndex:10, color:"white",}]} >Carol Jane</Text>
    </View>
   
  )
}