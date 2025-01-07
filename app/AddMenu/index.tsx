import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { logoimage } from "../SplashScreen";
import { addMenu } from "../../components/Common";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import BlackBgButtons from "@/components/BlackBgButtons";
const MenuIcon = require("../../assets/images/hamburger.png");
import * as ImagePicker from "expo-image-picker";

export default function AddMenu() {
  const [text, setText] = useState("");
  const [menuFields, setMenuFields] = useState(addMenu);
  const [menuName, setMenuName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // Radio Button State
  const [selectedDishType, setSelectedDishType] = useState("Veg");

  // Input Change Handler
  const handleInputChange = (text: string, index: number) => {
    const updatedFields = [...menuFields];
    updatedFields[index].input = text;
    setMenuFields(updatedFields);
  };

  // Upload Image
  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not choose any image");
    }
  };

  // Done Button after fill the values--

  const DoneMenu = () => {
    const allFields = menuFields.every((field) => field.input.trim());
    if (!allFields) {
      Alert.alert("filled all the values!!");
    } else {
      // Alert.alert("filled all the valuesfff!!");
      router.navigate("/HomePage");
    }
  };
  return (
    <SafeAreaView style={Styles.MenuMainContainer}>
      {/* Top Section */}
      <View style={Styles.TopContainer}>
        <Image source={logoimage} style={Styles.logoImage} />
        <View style={Styles.manuIconDiv}>
          <Image source={MenuIcon} style={Styles.menuIconImage} />
        </View>
      </View>
      {/* Menu Name */}
      <View style={Styles.menuName}>
        <TextInput
          placeholder="Menu Name"
          value={menuName}
          onChangeText={(text) => setMenuName(text)}
        />
      </View>
      {/* Category */}
      <View style={Styles.categoryField}>
        <TextInput
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
      </View>
      {/* Add Menu Input Fields */}
      <View>
        {menuFields.map((fields, index) => (
          <View key={index} style={Styles.inputDiv}>
            <TextInput
              placeholder={fields.title}
              value={fields.input}
              style={Styles.inputField}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          </View>
        ))}

        {/* Dish Type Radio Buttons */}
        <View style={Styles.radioContainer}>
          <Text style={Styles.radioHeader}>Select Dish Type:</Text>
          {["Veg", "Non-Veg", "Egg"].map((option) => (
            <TouchableOpacity
              key={option}
              style={Styles.radioButtonContainer}
              onPress={() => setSelectedDishType(option)}
            >
              <View style={Styles.radioButton}>
                {selectedDishType === option && (
                  <View style={Styles.radioButtonSelected} />
                )}
              </View>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upload Cover Image */}
        <View style={Styles.uploadFileField}>
          {image ? (
            <Image source={{ uri: image }} style={Styles.displayImage} />
          ) : (
            <>
              <Text style={Styles.uploadText}>Upload Cover Image</Text>
              <TouchableOpacity onPress={uploadImage}>
                <View style={Styles.uploadIcon}>
                  <Icon name="upload" size={10} color={"white"} />
                  <Text style={Styles.uploadFileText}>Upload File</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {/* Bottom Section */}
      <View>
        <View style={Styles.Buttons}>
          <TouchableOpacity>
            <Text style={Styles.doneButton} onPress={DoneMenu}>
              Done
            </Text>
          </TouchableOpacity>
          <View>
            <BlackBgButtons
              title={"Add Item"}
              onPress={() => router.navigate("/AddMenu")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
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
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 70,
    marginVertical: 25,
    fontSize: 18,
    letterSpacing: 2,
    borderRadius: 10,
  },
  categoryField: {
    backgroundColor: "whitesmoke",
    textDecorationLine: "underline",
    marginLeft: 5,
    marginHorizontal: "50%",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    paddingHorizontal: 20,
  },
  radioContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  radioHeader: {
    fontSize: 16,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "gray",
  },
  uploadFileField: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  uploadText: {
    fontSize: 13,
    paddingHorizontal: 20,
  },
  uploadIcon: {
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    gap: 6,
  },
  uploadFileText: {
    color: "white",
    fontSize: 10,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  doneButton: {
    paddingHorizontal: 59,
    paddingVertical: 14,
    textAlign: "center",
    fontSize: 16,
    borderRadius: 40,
    borderColor: "grey",
    borderWidth: 1,
  },
  displayImage: {
    width: 100,
    height: 70,
    alignSelf: "center",
    borderRadius: 6,
  },
});
