import NavBar from "@/components/NavBar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { OrdersPage } from "@/components/Common";
import { TouchableOpacity } from "react-native";
export default function Orders() {
  return (
    <SafeAreaView style={Styles.orderContainer}>
      <View>
        <NavBar title={"Orders"} />
      </View>

      <View>
        {OrdersPage.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[Styles.itemDiv, Styles.shadow]}
            >
              <Text style={Styles.text}>{item.title}</Text>
              {item.Icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: "white",
    flex: 1,
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