import React from "react"
import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons" // Assuming you are using Ionicons for icons

const MyButton = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon && (
        <Ionicons name={icon} size={20} color="white" style={styles.icon} />
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9f7aea",
    padding: 6,
    paddingHorizontal: 11,
    borderRadius: 25,
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 13,

    marginLeft: 5, // Add some space between icon and text
  },
  icon: {
    marginRight: 5, // Add some space between icon and text
  },
})

export default MyButton
