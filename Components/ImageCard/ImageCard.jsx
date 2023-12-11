//import liraries
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  Platform,
} from "react-native"
import DefaultImg from "../../assets/default.jpg"
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { EvilIcons } from "@expo/vector-icons"

// create a component
const ImageCard = () => {
  const windowWidth = Dimensions.get("window").width
  const { height: windowHeight } = useWindowDimensions()
  return (
    <View
      style={{
        height:
          Platform.OS === "ios" ? windowHeight * 0.78 : windowHeight * 0.86,
        width: "100%",
      }}
    >
      <Image style={{ width: "100%", height: "100%" }} source={DefaultImg} />

      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 30,
          alignItems: "flex-end",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderRadius: 10,
            padding: 2,
            opacity: 0.8,
          }}
        >
          <EvilIcons name="share-apple" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            bottom: 100,
            flexDirection: "column",
            gap: 2,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 30, color: "white", fontWeight: 600 }}>
            Talia Gull, 32
          </Text>
          <View style={{ marginTop: 10, gap: 10, marginLeft: 5 }}>
            <Text style={{ fontSize: 17, color: "white", fontWeight: 600 }}>
              {" "}
              Public Policy
            </Text>
            <Text style={{ fontSize: 17, color: "white", fontWeight: 600 }}>
              {" "}
              University of Cambridge 2019
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingHorizontal: 14,
            paddingVertical: 25,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "#9f7aea",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo style={{ color: "white" }} name="heart" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "#9f7aea",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoContainer: {
    width: "100%",
    flex: 0.3,
    height: "auto",
  },
  info: {
    backgroundColor: "green",
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 40,
  },
})

//make this component available to the app
export default ImageCard
