import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BlackBgButtons({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles.buttonShadow]}
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});
