import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SideBarItems } from "./Common";
import { logoimage } from "@/app/SplashScreen";
import { Link, router } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
export default function SideBar() {
  return (
    <SafeAreaView>
      <View style={Styles.sidebarContent}>
        <Image source={logoimage} style={Styles.logoImage} />
        {SideBarItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={Styles.iconDiv}
            onPress={() => {
              if (item.link) {
                router.navigate(`${item.link}`);
              } else {
                console.log(`No link provided${item.title}`);
              }
            }}
          >
            <View style={Styles.iconWrapper}>{item.icon}</View>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={Styles.logoutButton}>
          <Icon name="logout" color={"red"} />
          <Text style={Styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  sidebarContent: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    // flex:1
  },
  logoImage: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    // marginBottom: 20,
  },
  iconDiv: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconWrapper: {
    backgroundColor: "green",
    borderRadius: 100,
    padding: 7,
  },
  iconText: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  logoutButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // backgroundColor: "black",
    // borderRadius: 5,
  },
  logoutButtonText: {
    color: "red",
  },
});
