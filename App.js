import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Borders from "./practice/Borders";
import Shadows from "./practice/Shadows";
import PaddingAndMargin from "./practice/PaddingAndMargin";
import StyleText from "./practice/StyleText";
import Icons from "./practice/Icons";
import AppText from "./componenets/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I Love React</AppText>
    </View>
  );
}
