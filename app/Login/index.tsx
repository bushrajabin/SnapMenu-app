import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import { initialInputFields, Icons } from "../../components/Common";
import { logoimage } from "../SplashScreen";
import { useRouter } from "expo-router";
import Buttons from "@/components/Buttons";
import UserInput from "@/components/UserInput";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Success", `Welcome back, ${email}!`);
      router.navigate("/HomePage")
    } else {
      Alert.alert("Error", "Please fill in both fields.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Login Header */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.text2}>Welcome back! You've been missed!</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <UserInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <UserInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </View>

      {/* Sign-In Button */}
      <View style={styles.buttonContainer}>
        <Buttons title={"Sign In"} onPress={handleLogin} />
      </View>

      {/* Create New Account Option */}
      <Pressable onPress={() => router.push("/Registration")}>
        <Text style={styles.newAccount}>Create a new account</Text>
      </Pressable>

      {/* Social Login Options */}
      <View style={styles.continueWithContainer}>
        <Text style={styles.continueWith}>Or continue with</Text>
        <View style={styles.iconsContainer}>
          {Icons.map((icon, index) => (
            <View key={index} style={styles.icon}>
              {icon}
            </View>
          ))}
        </View>
        <Image source={logoimage} style={styles.logoImage} />
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
    paddingTop: 100,
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
    width: "90%",
    marginTop: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#1F41BB",
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
  },
  newAccount: {
    color: "#626262",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  continueWithContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  continueWith: {
    color: "#1F41BB",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    backgroundColor: "lightgrey",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    resizeMode: "contain",
  },
});
