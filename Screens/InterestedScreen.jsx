import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import ImageSmallCard from '../Components/ImageSmallCard/ImageSmallCard'

export default function InterestedScreen() {
  return (
    <View style={{flex:1}} >
      <View style={[tw`bg-purple-500 py-2 px-5 `,{borderBottomRightRadius:50,borderBottomLeftRadius:50} ]} >
        <Text style={[tw`text-3xl text-center text-white`]} >Intrested in You</Text>
        <Text style={[tw` text-center my-5 text-white `]} >Upgrade to Premium to check them out and match instantly</Text>
      </View>
      <View>
        
      </View>
<ScrollView style={{flex:1}} >

<View style={{flexDirection:"row",flexWrap:"wrap",flex:1,justifyContent:"center",borderRadius:30,marginVertical:20}} >
        <ImageSmallCard/>
        <ImageSmallCard/>
        <ImageSmallCard/>
        <ImageSmallCard/>
        <ImageSmallCard/>
        <ImageSmallCard/>
        <ImageSmallCard/>
</View>
</ScrollView>
    </View>
  )
}