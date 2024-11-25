import { View, Text, StyleSheet, Image, Pressable } from "react-native";
const logoimage = require("../assets/images/snapLogo.png");

export default function Screen() {
  const buttons = ["Login", "Register"];

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logoimage} style={styles.image} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur (TAGLINE)
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={[
              styles.button,
              button === "Register"
                ? styles.registerButton
                : styles.loginButton,
            ]}
            onPress={() => console.log(`${button} Pressed`)}
          >
            <Text
              style={[
                styles.buttonText,
                button === "Register" ? styles.registerButtonText : {},
              ]}
            >
              {button}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },
  topView: {
    width: "100%",
    marginTop: 90,
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 180,
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 10,
    margin: 10,
    width: 140,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginButton: {
    backgroundColor: "green",
  },
  registerButton:{
    backgroundColor:"transparent"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  registerButtonText: {
    color: "black",
  },
});
