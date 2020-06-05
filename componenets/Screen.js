import React from "react";
import Constants from "expo-constants"; //used to: see info about device and use themimport {StyleSheet, SafeAreaView, View} from "react-native";
import {StyleSheet, SafeAreaView} from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
