import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { Register } from "@/components/Common";
import { TouchableOpacity } from "react-native";
import BlackBgButtons from "@/components/BlackBgButtons";
import { router } from "expo-router";
import UserInput from "@/components/UserInput";

export default function RegisterRestaurant() {
  const [inputFields, setInputFields] = useState(Register);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.topContainer}>
        <Text style={Styles.text1}>Enter Details</Text>
        <Text style={Styles.text2}>Of Your Restaurant</Text>
      </View>
      <View>
        {inputFields.map((values, index) => {
          return (
            <View key={index}>
              <UserInput placeholder={values.title} value={values.input} />
            </View>
          );
        })}

        <TouchableOpacity style={Styles.button}>
          <BlackBgButtons
            title={"Get Started"}
            onPress={() => router.navigate("/HomePage")}
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
  topContainer: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  text1: {
    fontSize: 30,
    paddingBottom: 10,
  },
  text2: {
    color: "green",
    fontSize: 30,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 90,
    width: "100%",
  },
});
