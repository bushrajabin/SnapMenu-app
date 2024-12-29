import React from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../(tabs)/Dashboard";
import Orders from "../(tabs)/Orders";
import Offer from "../(tabs)/Offer";
import Chef from "../(tabs)/Chef";

const Tabs = createBottomTabNavigator();
export default function index() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Dashboard" component={Dashboard} />
        <Tabs.Screen name="Orders" component={Orders} />
        <Tabs.Screen name="Offers" component={Offer} />
        <Tabs.Screen name="Chef" component={Chef} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
