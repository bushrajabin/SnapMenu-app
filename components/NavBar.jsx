import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const MenuIcon = require("../assets/images/hamburger.png");
// const MenuIcon = require("../../assets/images/hamburger.png");

export default function NavBar({ title }) {
  return (
    <SafeAreaView>
      <View style={Styles.topContainer}>
        <Icon name="arrowleft" size={18} style={Styles.icon} />
        <Text style={Styles.text}>{title}</Text>
        <TouchableOpacity style={Styles.manuIconDiv}>
          <Image source={MenuIcon} style={Styles.menuIconImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingVertical: 10,
  },
  icon: {
    borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 5,
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 1,
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
    backgroundColor: "black",
  },
});
