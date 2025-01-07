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

export default function SideBar() {
  return (
    <SafeAreaView>
      <View style={Styles.sidebarContent}>
        <Image source={logoimage} style={Styles.logoImage} />
        {SideBarItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.link) {
                router.navigate(`${item.link}`);
              } else {
                console.log(`No link provided${item.title}`);
              }
            }}
          >
            {item.icon}
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={Styles.logoutButton}>
          <Text style={Styles.logoutText}>Log Out</Text>
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
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
