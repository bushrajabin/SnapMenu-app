import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { logoimage } from "./splashScreen";
import { initialInputFields } from "../components/Common";

export default function LoginPage() {
  const [inputFields, setInputFields] = useState(initialInputFields);

  // Handler to update input values
  const handleInputChange = (value, index) => {
    const updatedFields = [...inputFields];
    updatedFields[index].input = value;
    setInputFields(updatedFields);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Login Top-part */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.text2}>Welcome back! You've been missed!</Text>
      </View>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        {inputFields.map((field, index) => (
          <View key={index} style={styles.inputField}>
            <Text style={styles.inputLabel}>{field.title}</Text>
            <TextInput
              style={styles.textInput}
              placeholder={`Enter your ${field.title.toLowerCase()}`}
              value={field.input}
              onChangeText={(value) => handleInputChange(value, index)}
              secureTextEntry={field.title.toLowerCase() === "password"} // Secure text for password
            />
          </View>
        ))}
        {/* ---Forgot password text--- */}
        <Text style={styles.ForgotPassword}>Forgot your password?</Text>
        {/* SignIn Button */}
        <Pressable>
          <Text style={[styles.SignInButton, styles.buttonhShadow]}>
            SignIn
          </Text>
        </Pressable>
        {/* Create new account option--- */}
        <Text style={styles.newAccount}>Create a new account</Text>
      </View>

      {/* --Login with options-- */}
      <View style={styles.continueWithContainer}>
        <Text style={styles.continueWith}> Or continue with</Text>

        {/* ICONS {GOOGLE, FB, APPLE} */}
        <View style={styles.IconsContainer}>
          <Icon name="google" size={16} style={styles.Icon} />
          <Icon name="facebook" size={16} style={styles.Icon} />
          <Icon name="apple" size={16} style={styles.Icon} />
        </View>

        <Image source={logoimage} style={styles.LogoImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 90,
  },
  text: {
    color: "green",
    fontSize: 27,
    fontWeight: "bold",
  },
  text2: {
    color: "black",
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: "95%",
    paddingHorizontal: 13,
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    marginBottom: 19,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#F1F4FF",
  },
  ForgotPassword: {
    textAlign: "right",
    color: "#1F41BB",
    fontWeight: "bold",
  },
  SignInButton: {
    backgroundColor: "#0B9A55",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 19,
    borderRadius: 10,
    padding: 10,
    marginTop: 24,
  },
  buttonhShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  newAccount: {
    color: "#626262",
    paddingTop: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  continueWithContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  continueWith: {
    color: "#1F41BB",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 26,
  },
  IconsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  Icon: {
    backgroundColor: "lightgrey",
    padding: 6,
    width: 45,
    margin: 9,
    textAlign: "center",
    borderRadius: 4,
  },
  LogoImage: {
    width: 160,
    objectFit: "contain",
    paddingBottom: 40,
  },
});