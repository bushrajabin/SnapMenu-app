// import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Registration() {
  return (
    <SafeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.text2}>Welcome back! You've been missed!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 90,
  },
  text: {
    color: "green",
    fontSize: 27,
    fontWeight: "bold",
  },
  text2: {
    color: "black",
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
