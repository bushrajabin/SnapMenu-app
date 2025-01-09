import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import BlackBgButtons from "@/components/BlackBgButtons";
import UserInput from "@/components/UserInput";

const ManageMembers = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMemberAvailable, setIsMemberAvailable] = useState(false);

  const addMember = () => {
    if (email && password) {
      setIsMemberAvailable(true);
      Alert.alert("Successfully member added!!!");
    } else {
      Alert.alert("All fields are required DUFFER!!!");
    }
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View>
        <NavBar title={"Manage Member"} />
      </View>

      <View style={Styles.addItemContainer}>
        <Text style={Styles.text}>Add New Member</Text>
        <View>
          <UserInput
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <UserInput
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={Styles.addButton}>
          <BlackBgButtons title={"Add member"} onPress={addMember} />
        </TouchableOpacity>

        {isMemberAvailable ? (
          <View style={Styles.memberDetails}>
            <Text style={Styles.text1}>Member Details</Text>
            <Text style={Styles.text2}>Email: {email}</Text>
            <Text style={Styles.text2}>Password: {password}</Text>
          </View>
        ) : (
          <View style={Styles.availableNot}>
            <Text style={Styles.text1}>Existing Member</Text>
            <Text style={Styles.text2}>No members added yet...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default ManageMembers;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  addItemContainer: {
    paddingTop: 40,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 40,
  },
  addButton: {
    justifyContent: "center",
    marginHorizontal: 80,
    marginTop: 10,
  },
  availableNot: {
    marginTop: 10,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "300",
    color: "grey",
  },
  memberDetails: {
    marginTop: 10,
    alignItems: "center",
  },
});
