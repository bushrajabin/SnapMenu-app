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

export default function RegisterRestaurant() {
  const [inputFields, setInputFields] = useState(Register);

  const handleInputChange = (value: string, index: number) => {
    const updatedFields = [...inputFields];
    updatedFields[index].input = value;
    setInputFields(updatedFields);
  };

  //   home pageee
  // const toHomePage = () => {
  //   // Check if all fields are filled
  //   const allFieldsFilled = inputFields.every((field) => field.input.trim());

  //   if (inputFields) {
  //     Alert.alert("Error", "Please fill in all fields.");
  //   } else {
  //     router.navigate("/HomePage");
  //   }
  // };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.topContainer}>
        <Text style={Styles.text1}>Enter Details</Text>
        <Text style={Styles.text2}>Of Your Restaurant</Text>
      </View>
      <View>
        {inputFields.map((values, index) => {
          return (
            <View key={index} style={Styles.inputFields}>
              <TextInput
                placeholder={values.title}
                value={values.input}
                style={Styles.fields}
                onChangeText={(value) => handleInputChange(value, index)}
              />
            </View>
          );
        })}
        <TouchableOpacity style={Styles.button}>
          <BlackBgButtons
            title={"Get Started"}
            onPress={() => router.navigate("/HomePage")}
          />
          {/* <BlackBgButtons title={"Get Started"} /> */}
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
  inputFields: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  fields: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 5,
    fontSize: 17,
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    marginHorizontal: 100,
    marginTop: 90,
  },
});
