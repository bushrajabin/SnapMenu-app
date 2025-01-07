import BlackBgButtons from "@/components/BlackBgButtons";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Alert } from "react-native";
const MenuIcon = require("../../assets/images/hamburger.png");
import { logoimage } from "../SplashScreen";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import SideBar from "@/components/SideBar";

export default function HomePage() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleMenu = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <View style={Styles.TopContainer}>
          <Image source={logoimage} style={Styles.logoImage} />
          <TouchableOpacity style={Styles.manuIconDiv} onPress={toggleMenu}>
            <Image source={MenuIcon} style={Styles.menuIconImage} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={Styles.Text}>Available Menus</Text>
        </View>

        {isSidebarVisible && (
          <View>
            <SideBar />
          </View>
        )}

        <TouchableOpacity style={Styles.button}>
          <BlackBgButtons
            title={"Add Menu"}
            onPress={() => router.navigate("/AddMenu")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  TopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImage: {
    width: "60%",
    height: 80,
    objectFit: "contain",
  },
  manuIconDiv: {
    backgroundColor: "black",
    width: 70,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    padding: 2,
  },
  menuIconImage: {
    width: 40,
    height: 40,
    color: "white",
  },

  Text: {
    textDecorationLine: "underline",
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  button: {
    marginVertical: 100,
    paddingHorizontal: 100,
    paddingVertical: "81%",
  },
});
