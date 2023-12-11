//import liraries
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native"
import ImageCard from "../Components/ImageCard/ImageCard"
import DefaultImg from "../assets/default.jpg"
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

import MyButton from "../Components/Button/Button"
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler"
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  withS,
  withSpring,
} from "react-native-reanimated"
import tw from "tailwind-react-native-classnames"

// create a component
const HomeScreen = () => {
  const { width: screenWidth } = useWindowDimensions()
  const position = useSharedValue(0)
  const rotate = useDerivedValue(
    () => interpolate(position.value, [0, screenWidth], [0, 60]) + "deg"
  )

  const PanGestures = Gesture.Pan()

    .onUpdate((e) => {
      position.value = e.translationX
    })
    .onEnd(() => {
      position.value = withTiming(0, { duration: 500 })
      rotate.value = withTiming(0, { duration: 500 })
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(position.value) },
      { rotate: withSpring(rotate.value) },
    ],
  }))
  const animatedLike = useAnimatedStyle(() => ({
    opacity: interpolate(position.value, [0, screenWidth], [0, 5]),
  }))
  const animatedNope = useAnimatedStyle(() => ({
    opacity: interpolate(position.value, [0, -screenWidth], [0, 5]),
  }))
  let Rot = 0
  const pan = Gesture.Pan()
  return (
    <View style={[tw`my-2`]}>
      <GestureHandlerRootView>
        <GestureDetector gesture={PanGestures}>
          <View style={{ alignItems: "center" }}>
            <Animated.View style={[animatedStyle, styles.box]}>
              <View
                style={{
                  position: "absolute",
                  top: "50%",
                  width: "100%",
                  zIndex: 30,
                }}
              >
                <Animated.View
                  style={[
                    animatedLike,
                    {
                      color: "#9f7aea",
                      position: "absolute",
                      left: 20,
                      padding: 10,
                      borderWidth: 5,
                      borderRadius: 30,
                      borderColor: "#9f7aea",
                      backgroundColor: "white",
                    },
                  ]}
                >
                  <AntDesign name="check" size={40} color="#9f7aea" />
                </Animated.View>
                <Animated.View
                  style={[
                    animatedNope,
                    {
                      color: "#9f7aea",
                      position: "absolute",
                      right: 20,
                      padding: 10,
                      borderWidth: 5,
                      borderRadius: 30,
                      borderColor: "#9f7aea",
                      backgroundColor: "white",
                    },
                  ]}
                >
                  <Entypo name="cross" size={40} color="#9f7aea" />
                </Animated.View>
              </View>
              <View style={{ borderRadius: 20, marginHorizontal: 4,overflow: 'hidden',background: 'transparent' }}>
              <ScrollView
                overScrollMode="always"
               
              >
                <ImageCard />
                <View
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <View style={{ gap: 10, marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: "black" }}>
                      About Me
                    </Text>
                    <Text style={{ fontSize: 15, color: "black" }}>
                      Not Here To be Your Personal Thapist
                    </Text>
                    <View style={{ width: "55%", marginVertical: 10 }}>
                      <MyButton title={"Send a Compliment"} icon={"heart"} />
                    </View>
                  </View>
                  <Text style={{ fontSize: 20, color: "black" }}>
                    My Basics
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <MyButton title={"177cm"} />
                    <MyButton title={"No smoking"} icon={"glasses"} />
                    <MyButton title={"in Grad School"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "black" }}>
                    My Intrests
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <MyButton title={"Gym"} />
                    <MyButton title={"No smoking"} icon={"glasses"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "black" }}>
                    Languages I Know
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <MyButton title={"Pashto"} />
                  </View>
                </View>
                <ImageCard />
                <View
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "black" }}>
                    Languages I Know
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <MyButton title={"Pashto"} />
                  </View>
                </View>
                <ImageCard />
                <View
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <View style={{ gap: 10, marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: "black" }}>
                      About Me
                    </Text>
                    <Text style={{ fontSize: 15, color: "black" }}>
                      Not Here To be Your Personal Thapist
                    </Text>
                    <View style={{ width: "55%", marginVertical: 10 }}>
                      <MyButton title={"Send a Compliment"} icon={"heart"} />
                    </View>
                  </View>
                  <Text style={{ fontSize: 20, color: "black" }}>
                    My Basics
                  </Text>
                  <View
                    style={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <MyButton title={"177cm"} />
                    <MyButton title={"No smoking"} icon={"glasses"} />
                    <MyButton title={"in Grad School"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                    <MyButton title={"Gym"} />
                  </View>
                </View>
              </ScrollView>
              </View>
            </Animated.View>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "green",
  },
})

//make this component available to the app
export default HomeScreen
