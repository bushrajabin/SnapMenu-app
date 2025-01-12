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
import { router } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import BlackBgButtons from "@/components/BlackBgButtons";
const MenuIcon = require("../../assets/images/hamburger.png");
const MenuImage = require("../../assets/images/MenuImage.png");
import * as ImagePicker from "expo-image-picker";
import UserInput from "@/components/UserInput";

export default function AddMenu() {
  const [menuName, setMenuName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  // Radio Button State
  const [selectedDishType, setSelectedDishType] = useState("Veg");
  // After done the menu
  const [isMenuDone, setIsMenuDone] = useState(false);

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
    if (
      menuName == "" ||
      category == "" ||
      image == "" ||
      itemName == "" ||
      itemPrice == "" ||
      itemDescription == "" ||
      selectedDishType == ""
    ) {
      Alert.alert("All field are require");
    } else {
      // Alert.alert("hiii")
      setIsMenuDone(true);
    }
  };

  // delete
  const handleDelete = () => {
    setIsMenuDone(true);
  };

  // add section
  const addSection = () => {
    Alert.alert("h");
    setIsMenuDone(false);
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
      <View>
        <UserInput
          placeholder="Menu Name"
          value={menuName}
          onChangeText={(text) => setMenuName(text)}
        />
      </View>
      {/* Category */}
      <View style={Styles.categoryField}>
        <UserInput
          placeholder="Category field                        "
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <Icon name="delete" size={20} onPress={handleDelete} />
      </View>

      {isMenuDone ? (
        <View>
          {/* Add Menu Input Fields */}
          <View>
            <UserInput
              placeholder="Item Name"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />
            <UserInput
              placeholder="Item Price"
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
            />
            <UserInput
              placeholder="Item Description"
              value={itemDescription}
              onChangeText={(text) => setItemDescription(text)}
            />

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

          {/* Buttons for add menu section */}
          <View>
            <View style={Styles.Buttons}>
              <BlackBgButtons title={"Done"} onPress={DoneMenu} />
              <BlackBgButtons
                title={"Add Item"}
                onPress={() => router.navigate("/AddMenu")}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={Styles.isMenu}>
          <View style={Styles.menuItems}>
            <Image source={MenuImage} style={Styles.MenuImage} />
            <Text>
              {itemName}-({itemPrice})
            </Text>
            <Text>{itemDescription}</Text>

            <TouchableOpacity style={Styles.editButton}>
              <BlackBgButtons title={"   Edit   "} />
            </TouchableOpacity>
          </View>

          {/*Buttons for IsMenu section  */}
          <TouchableOpacity style={Styles.isMenuButtons}>
            <BlackBgButtons title={"Add Section"} onPress={addSection} />
            <BlackBgButtons title={"Save Menu"} />
          </TouchableOpacity>
        </View>
      )}
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
  categoryField: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 20,
    alignItems: "center",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  displayImage: {
    width: 100,
    height: 70,
    alignSelf: "center",
    borderRadius: 6,
  },
  // isMenu Styles----
  isMenu: {
    backgroundColor: "yellow",
  },
  menuItems: {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  MenuImage: {
    width: 40,
    height: 40,
  },
  isMenuButtons: {
    marginHorizontal: 80,
    gap: 10,
  },
  editButton: {
    // marginHorizontal: "30%",
  },
});
