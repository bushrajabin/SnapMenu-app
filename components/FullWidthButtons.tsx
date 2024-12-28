import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FullWidthButtons({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal:35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10,
    marginHorizontal:10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
});
