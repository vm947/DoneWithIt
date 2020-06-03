import React from "react";
import { View, Text } from "react-native";

import AppText from "../componenets/AppText";

export default function StyleText() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love React Native.</AppText>
    </View>
  );
}
