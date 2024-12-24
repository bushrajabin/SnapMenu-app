import React from "react";
import { View, Text, Image, StyleSheet, Switch, TextInput } from "react-native";
import { logoimage } from "../SplashScreen";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
const MenuIcon = require("../../assets/images/hamburger.png");
import { addMenu } from "../../components/Common";
import { SafeAreaView } from "react-native";
import { router } from "expo-router";
export default function AddMenu() {
  // Toggle Button
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("");
  const [menuFields, setMenuFields] = useState(addMenu);
  // conditionally ON OFF
  const toggleSwitch = () => {
    if (isEnabled) {
      setText("OFF");
    } else {
      setText("ON");
    }
    setIsEnabled((previousState) => !previousState);
  };

  //for input changes
  const handleInputChange = (text: string, index: number) => {
    const updatedFields = [...menuFields];
    updatedFields[index].input = text;
    setMenuFields(updatedFields);
  };

  return (
    <SafeAreaView style={styles.MenuMainContainer}>
      <View style={styles.TopContainer}>
        <Image source={logoimage} style={styles.logoImage} />

        <View style={styles.manuIconDiv}>
          <Image source={MenuIcon} style={styles.menuIconImage} />
        </View>
      </View>

      {/* Menu Name Top---- */}
      <View>
        <Text style={styles.menuName}>Menu Name</Text>
      </View>

      {/* Category field---- */}
      <View>
        <Text style={styles.categoryField}>Category 1</Text>
      </View>

      {/* Add Menu Input Fields */}
      <View>
        {menuFields.map((fields, index, arr) => {
          return (
            <View key={index} style={styles.inputDiv}>
              <TextInput
                placeholder={fields.title}
                value={fields.input}
                style={styles.inputField}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            </View>
          );
        })}
      </View>

      {/* Bottom part authentication and buttons----- */}
      <View>
        <View style={styles.authenticationDiv}>
          <Text style={styles.authenticationText}>Require Authentication</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>

        <View style={styles.Buttons}>
          <TouchableOpacity>
            <Text style={styles.doneButton}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.AddButton} onPress={()=>router.push("/CoverImage")}>Add Next Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MenuMainContainer: {
    flex: 1,
    backgroundColor: "white",
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
  menuName: {
    backgroundColor: "whitesmoke",
    textDecorationLine: "underline",
    textAlign: "center",
    alignItems: "center",
    width: "50%",
    padding: 10,
    justifyContent: "center",
    margin: "auto",
    fontSize: 18,
    letterSpacing: 2,
    borderRadius: 10,
  },
  categoryField: {
    backgroundColor: "whitesmoke",
    textDecorationLine: "underline",
    textAlign: "center",
    alignItems: "center",
    width: "50%",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 30,
    fontSize: 18,
    borderRadius: 10,
  },
  inputDiv: {
    backgroundColor: "white",
    padding: 5,
    margin: 7,
    marginHorizontal: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputField: {
    color: "black",
    padding: 8,
    fontSize: 14,
  },
  authenticationDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  authenticationText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  doneButton: {
    padding: 17,
    textAlign: "center",
    fontSize: 16,
    borderRadius: 40,
    width: 160,
    borderColor: "grey",
    borderWidth: 1,
  },
  AddButton: {
    backgroundColor: "black",
    color: "white",
    padding: 17,
    fontSize: 16,
    borderRadius: 40,
    width: 160,
    textAlign: "center",
  },
});
