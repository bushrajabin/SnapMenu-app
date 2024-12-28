import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Buttons({ title, onPress }) {
  return (
    <TouchableOpacity style={[Styles.buttonContainer, Styles.buttonhShadow]}>
      <Text style={Styles.button} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#0B9A55",
    paddingVertical:14,
    paddingHorizontal:"41%",
    borderRadius:10,
    marginVertical:20
    
  },
  buttonhShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
