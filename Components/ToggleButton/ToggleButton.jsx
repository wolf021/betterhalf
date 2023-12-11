import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"

export default function ToggleButton() {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setIsToggle(!isToggle)}
      style={{
        backgroundColor: `${isToggle ? "#9f7aead9" : "gray"}`,
        width: 50,
        height: 25,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: `${isToggle ? "flex-end" : "flex-start"}`,
        paddingHorizontal: 5,
      }}
    >
      <View
        style={{
          width: 18,
          height: 18,
          backgroundColor: `${!isToggle ? "lightgrey" : "white"}`,
          borderRadius: 20,
          elevation: 4,
        }}
      ></View>
    </TouchableOpacity>
  )
}
