import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import tw from "tailwind-react-native-classnames"
import { AntDesign } from "@expo/vector-icons"

export default function CheckBox() {
  const [checked, setChecked] = React.useState(true)
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setChecked(!checked)}
      style={[
        tw`border-2  items-center justify-center w-7 h-7 rounded-lg `,
        {
          borderColor: "#9f7aead9",
          backgroundColor: `${!checked ? "white" : "#9f7aead9"}`,
        },
      ]}
    >
      <AntDesign
        name="check"
        size={25}
        color={`${!checked ? "transparent" : "white"}`}
      />
    </TouchableOpacity>
  )
}
