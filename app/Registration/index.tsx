import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { initialInputFields } from "../../components/Common";
import { Icons } from "../../components/Common";
import { logoimage } from "../SplashScreen";
import { Link, useRouter } from "expo-router";
import Buttons from "@/components/Buttons";
// import { useNavigation } from "expo-router";

export default function Registration() {
  const [inputFields, setInputFields] = useState(
    initialInputFields(true, true)
  );
  // const navigation = useNavigation();
  const router = useRouter();

  // Handler to update input values
  const handleInputChange = (value: string, index: number) => {
    const updatedFields = [...inputFields];
    updatedFields[index].input = value;
    setInputFields(updatedFields);
  };

  // Handler to send OTP
  const handleSendOtp = () => {
    Alert.alert("Send OTP on your email!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text2}>
          Create an account so you can explore all the existing jobs!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {inputFields.map((field, index) => {
          return (
            <View key={index} style={styles.inputField}>
              <TextInput
                style={styles.textInput}
                placeholder={field.title || "Enter value"}
                value={field.input}
                onChangeText={(value) => handleInputChange(value, index)}
                secureTextEntry={field.title.toLowerCase() === "password"} // Secure text for password
                autoCapitalize="none"
              />
              {field.title === "Email" && field.showSendOtp && (
                <Pressable style={styles.sendOtpButton} onPress={handleSendOtp}>
                  <Text style={styles.sendOtpButtonText}>Send OTP</Text>
                </Pressable>
              )}
            </View>
          );
        })}

        {/* Sign Up Button */}
        {/* <View> */}
          <Buttons title={"SignUp"} onPress={()=>router.navigate('/HomePage')} />
        {/* </View> */}
        {/* Already have an account option */}
        <Link href={"/Login"} style={styles.newAccount}>
          Already have an account?
        </Link>
      </View>

      {/* --Login with options or continue with-- */}
      <View style={styles.continueWithContainer}>
        <Text style={styles.continueWith}> Or continue with</Text>

        {/* ICONS {GOOGLE, FB, APPLE} */}
        <View style={styles.IconsContainer}>
          {Icons.map((icon, index) => {
            return (
              <View key={index} style={styles.Icon}>
                {icon}
              </View>
            );
          })}
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
  },
  text: {
    color: "green",
    fontSize: 27,
    fontWeight: "bold",
    paddingTop: 50,
  },
  text2: {
    color: "black",
    fontSize: 14,
    marginVertical: 10,
    padding: 5,
    textAlign: "center",
  },
  inputContainer: {
    width: "95%",
    paddingHorizontal: 13,
  },
  inputField: {
    marginBottom: 19,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#F1F4FF",
  },
  sendOtpButton: {
    marginTop: 3,
    alignSelf: "flex-end",
  },
  sendOtpButtonText: {
    color: "#1F41BB",
    fontWeight: "bold",
  },
  newAccount: {
    color: "#626262",
    paddingTop: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  continueWithContainer: {
    flex: 1,
    alignItems: "center",
  },
  continueWith: {
    color: "#1F41BB",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 20,
  },
  IconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  Icon: {
    backgroundColor: "lightgrey",
    padding: 7,
    width: 45,
    marginHorizontal: 9,
    textAlign: "center",
    borderRadius: 4,
    alignItems: "center",
  },
  LogoImage: {
    width: 100,
    objectFit: "contain",
    paddingBottom: 100,
  },
});
