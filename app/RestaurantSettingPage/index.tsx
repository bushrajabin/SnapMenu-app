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
import NavBar from "@/components/NavBar";
import { Link, router } from "expo-router";

export default function RestaurantSettingPage() {
  const [SettingItems, SetSettingItems] = useState(RestaurentSetting);
  return (
    <SafeAreaView>
      <View style={Styles.mainContainer}>
        <NavBar title={"Restaurant Settings"} />
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
});
