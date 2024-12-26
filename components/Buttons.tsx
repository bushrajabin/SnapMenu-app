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
    backgroundColor: "#0B9A55",
    justifyContent: "center",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonhShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
