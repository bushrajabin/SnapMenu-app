import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { SideBarItems } from "./Common";
import { logoimage } from "@/app/SplashScreen";
import { TouchableOpacity } from "react-native";

export default function SideBar() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.text}>
        <Image source={logoimage} style={Styles.logoImage} />
        {SideBarItems.map((items, index) => (
          <View key={index} style={Styles.iconDiv}>
            <View style={Styles.icons}>{items.icon}</View>
            <Text style={Styles.text}>{items.title}</Text>
          </View>
        ))}

        <TouchableOpacity>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "60%",
    // height: "100%",
  },
  iconDiv: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  logoImage: {
    width: "100%",
    height: 80,
    objectFit: "contain",
    backgroundColor: "green",
  },
  icons: {
    backgroundColor: "green",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  text: {
    color: "black",
    backgroundColor: "yellow",
    textDecorationLine: "underline",
    fontSize: 20,
    fontWeight: "300",
    paddingHorizontal: 20,
  },
});
