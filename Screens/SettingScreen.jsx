//import liraries
import React, { Component, useDeferredValue } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { GestureDetector, Gesture,GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    useDerivedValue,
    interpolate
  } from 'react-native-reanimated';
  
// create a component
const SettingScreen = () => {
    const {width:screenWidth} = useWindowDimensions()
    const position = useSharedValue(0);
    const rotate = useDerivedValue(()=>interpolate(position.value, [0, screenWidth], [0, 60])+ "deg")
    
   const PanGestures = Gesture.Pan()
   
   .onUpdate((e) => {
    
    position.value =withTiming(e.translationX, { duration: 100 });


   })
   .onEnd(()=>{
position.value =withTiming(0, { duration: 500 });
rotate.value =withTiming(0, { duration: 500 });

   })
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: position.value},{rotate:rotate.value}],
    }));
    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={PanGestures} >

        <View style={{alignItems:"center"}} >

            <Animated.View style={[animatedStyle,styles.box]} >
               
            </Animated.View>
            </View>
            </GestureDetector>
        </GestureHandlerRootView>
            
     
    );
  }
  
  const styles = StyleSheet.create({
    box: {
      height:600,
      width: 350,
      backgroundColor:"teal",
      borderRadius: 20,
      marginBottom: 30,
      top:200,position:"absolute"
    },
  });

//make this component available to the app
export default SettingScreen;
