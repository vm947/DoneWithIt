import React from "react";
import AppButton from "../../componenets/AppButton";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.backGround}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    bottom: 400,
  },
});

export default WelcomeScreen;
