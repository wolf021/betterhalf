import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import ProfileScreen from '../Screens/ProfileScreen'
import BestMatches from '../Screens/BestMatches'
import InterestedScreen from '../Screens/InterestedScreen'
import ChatScreen from '../Screens/ChatScreen'
import HomeScreen from '../Screens/HomeScreen'
import tw from 'tailwind-react-native-classnames'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function RootNavigator() {
    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator  screenOptions={{tabBarOptions: { showLabel: false }}} >
            <Tab.Screen name='Better Half' component={HomeScreen}  options={{ headerTitleAlign:"center",
                headerRight: () =>(
                    <TouchableOpacity style={{marginHorizontal:10}} >
                        <FontAwesome5 name="sliders-h" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerLeft: () =>(
                    <TouchableOpacity style={{marginHorizontal:10}} >
                        <Fontisto name="undo" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerTitleStyle:{color:"#9f7aea", fontSize:30}
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='BestMatches' component={BestMatches} options={ { headerTitle:"", headerStyle:[tw`bg-purple-500`,{borderBottomWidth: 0},],headerShadowVisible: false, 
            
           }} />
            <Tab.Screen name='Intrested' component={InterestedScreen} options={{headerTitle:"",headerStyle:[tw`bg-purple-500`],headerShadowVisible: false,}} />
            <Tab.Screen name='Chats' component={ChatScreen}  />
        </Tab.Navigator>
    </NavigationContainer>
  )
}