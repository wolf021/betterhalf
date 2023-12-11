import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native"
import MyButton from "../Components/Button/Button"
import ToggleButton from "../Components/ToggleButton/ToggleButton"
import { Entypo } from "@expo/vector-icons"
import tw from "tailwind-react-native-classnames"

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ marginHorizontal: "5%" }}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          Narrow Your Search
        </Text>
      </View>
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
      <View>
        <Text>Who You want to match with </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          borderRadius: "5%",
          padding: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 10,
            borderColor: "lightgrey",
          }}
        >
          <Text>I am open to Dating</Text>
          <ToggleButton />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 10,
            borderColor: "lightgrey",
          }}
        >
          <Text>I am open to Dating</Text>
        </View>
      </View>
      <View>
        <Text>Age </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          borderRadius: "5%",
          padding: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 10,
            borderColor: "lightgrey",
          }}
        >
          <Text>I am open to Dating</Text>
          <View
            style={{
              backgroundColor: "grey",
              width: 50,
              height: 25,
              borderRadius: 20,
              justifyContent: "center",
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                backgroundColor: "white",
                borderRadius: 20,
                elevation: 1,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingVertical: 5,
            borderColor: "lightgrey",
          }}
        >
          <Text>I am open to Dating</Text>
          <View
            style={{
              backgroundColor: "#9f7aead9",
              width: 50,
              height: 25,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                backgroundColor: "white",
                borderRadius: 20,
                elevation: 1,
              }}
            ></View>
          </View>
        </View>
      </View>
      <View>
        <Text>Language You Know </Text>
      </View>
      <View
        style={{
          borderRadius: "5%",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Select Language </Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[tw`h-60 justify-end`]}>
        <TouchableOpacity
          style={[tw`items-center bg-yellow-500 p-4 rounded-3xl  `]}
        >
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={[{ position: "absolute", bottom: -90 }]}>
        <Text>Language</Text>
      </View>
    </SafeAreaView>
  )
}
