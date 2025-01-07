import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { RestaurentSetting } from "../../components/Common";
import Icon from "react-native-vector-icons/AntDesign";
const MenuIcon = require("../../assets/images/hamburger.png");
import { Link, router } from "expo-router";

export default function RestaurantSettingPage() {
  const [SettingItems, SetSettingItems] = useState(RestaurentSetting);
  return (
    <SafeAreaView>
      <View style={Styles.mainContainer}>
        <View style={Styles.topContainer}>
          <Icon name="arrowleft" size={18} style={Styles.icon} />
          <Text style={Styles.text}>Restaurant Settings</Text>
          <TouchableOpacity style={Styles.manuIconDiv}>
            <Image source={MenuIcon} style={Styles.menuIconImage} />
          </TouchableOpacity>
        </View>
        <View style={Styles.itemContainer}>
          {SettingItems.map((items, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[Styles.itemDiv, Styles.shadow]}
                onPress={() => {
                  if (items.link) {
                    router.navigate(`${items.link}`);
                  } else {
                    console.log(`No link provided${items.title}`);
                  }
                }}
              >
                <Text style={Styles.text}>{items.title}</Text>

                {items.Icon}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 3,
    textAlign: "center",
    alignItems: "center",
  },
  icon: {
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 9,
  },
  itemContainer: {
    marginTop: 90,
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  shadow: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: 600,
    letterSpacing: 1,
  },
  manuIconDiv: {
    backgroundColor: "black",
    width: 60,
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
});
