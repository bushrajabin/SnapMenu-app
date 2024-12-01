import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
const logoimage = require("../assets/images/snapLogo.png");
import { Image } from "react-native";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/SplashScreen");
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoimage} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
