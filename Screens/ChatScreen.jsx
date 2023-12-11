import { View, Text, SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

import Avatarr from "../assets/avatar.png"
import { Avatar } from 'react-native-paper'



export default function ChatScreen() {
  return (
    <View style={{marginHorizontal:10}} >
      <Text style={[tw`text-xl my-5 mx-3`]} >Match Queue</Text>
      <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"60%"}]} >
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Learn More</Text>
        </View>
      </TouchableOpacity>
      <View>
      <Text style={[tw`text-xl my-5 mx-3`]} >Chats</Text>
      </View>
      <ScrollView overScrollMode="always">
         <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10,marginVertical:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"70%",rowGap:2}]} >
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Jason Borne</Text>
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
        </View>
      </TouchableOpacity>
         <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10,marginVertical:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"70%",rowGap:2}]} >
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Jason Borne</Text>
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
        </View>
      </TouchableOpacity>
         <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10,marginVertical:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"70%",rowGap:2}]} >
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Jason Borne</Text>
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
        </View>
      </TouchableOpacity>
         <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10,marginVertical:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"70%",rowGap:2}]} >
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Jason Borne</Text>
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
        </View>
      </TouchableOpacity>
         <TouchableOpacity style={[tw`  flex-row items-center  `,{gap:6,marginHorizontal:10,marginVertical:10}]} >
        <Avatar.Image source={Avatarr} size={80}  />
        <View style={[tw``, {width:"70%",rowGap:2}]} >
          <Text style={{fontWeight:"700", color:"#9f7aea"}} >Jason Borne</Text>
          <Text>Spotlight is the easiest way to up your odds of a match!</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}