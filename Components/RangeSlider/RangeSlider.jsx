import { View, Dimensions, Text } from "react-native"
import React, { useEffect, useState } from "react"
import tw from "tailwind-react-native-classnames"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from "react-native-reanimated"
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler"
import Slider from "@react-native-community/slider"

export default function RangeSlider({ title }) {
  const [min, setFirst] = useState(0)
  const slider = useSharedValue(0)

  const slider1 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = slider.value
    },
    onActive: (e, ctx) => {
      slider.value = ctx.startX + e.translationX
      runOnJS(() => {
        setFirst(slider.value)
      })
    },
  })
  const AnimatedSlider1 = useAnimatedStyle(() => ({
    transform: [{ translateX: slider.value }],
  }))
  return (
    <>
      <View style={[tw`flex-row justify-between`]}>
        <Text>{title}</Text>
        <Text>{min} cm</Text>
      </View>
      <Slider
        style={{ backgroundColor: "white" }}
        value={min}
        onValueChange={(value) => setFirst(value.toFixed())}
        minimumValue={min}
        maximumValue={218}
        minimumTrackTintColor="#9f7aead9"
        maximumTrackTintColor="#000000"
      />
    </>
  )
}
