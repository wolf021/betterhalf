import { View, Text, TouchableOpacity, ScrollView,Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import MyButton from '../Components/Button/Button'
import { Entypo } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import ToggleButton from '../Components/ToggleButton/ToggleButton';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RangeSlider from '../Components/RangeSlider/RangeSlider';


export default function AdvancedFiltersScreen() {
    const [isModal, setIsModal] = useState(true)

    const ModalOpen =() =>{ setIsModal(true) }
    const ModalClose =() =>{ setIsModal(false) }


  return (
    <SafeAreaView style={{ marginHorizontal: "5%" }}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          Narrow Your Search
        </Text>
      </View>
      

    
<Modal visible={isModal} animationType="slide" transparent onPress={ModalClose} >
        <TouchableOpacity activeOpacity={1}  style={[{ flex:1, justifyContent:"flex-end"}, tw`bg-opacity-80  `]} >

        <View style={{backgroundColor:"white", borderWidth:1 , borderRadius:20, padding:10,paddingHorizontal:20, paddingVertical:20,borderColor:"gray",}} >
        
           <View style={[tw`flex-row `]} >
            <TouchableOpacity activeOpacity={1} onPress={ModalClose}   >
            <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{  fontSize: 20,width:"90%" ,textAlign:"center"  }}>
          Narrow Your Search
        </Text>
           </View>
           <View style={[{},tw`my-5`]} >
            <RangeSlider title={"Taller then "} />
            <RangeSlider title={"Shorter then"}/>
            
        </View>
        </View>
         </TouchableOpacity>
</Modal>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "10%",
          marginVertical: 20,
        }}
      >
        <MyButton title={"Basic Filters"} />
        <MyButton title={"Advance Filters"} />
      </View>
      <ScrollView style={{height:"75%"}} >
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
        <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity activeOpacity={1} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <Entypo name="shield" size={24} color={"grey"} />
          <Text >Select Language </Text>
            </View>
            <ToggleButton/>
          </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical:5
        }}
      >
                <View style={{marginHorizontal:10, marginVertical:5}} >
        <Text style={{color:"gray"}} >Select Language </Text>
        </View>
          <TouchableOpacity onPress={ModalOpen} style={{backgroundColor:"white", width:"100%",  borderRadius:20,justifyContent:"center", alignItems:"center",padding:10,borderWidth:1,borderColor:"lightgrey",flexDirection:"row", justifyContent:"space-between" }} >
            <View style={[tw` flex-row items-center `,{columnGap:2}]} >
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          <Text >Do exercise</Text>
            </View>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        
       
       
      </View>
   
      </ScrollView>
<View style={{paddingVertical:30}} >
      <TouchableOpacity  style={[tw`items-center bg-yellow-500 p-4 rounded-3xl  `] } >
        <Text>Apply</Text>
      </TouchableOpacity>
</View>
    </SafeAreaView>
  )
}