import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  View,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row'
      }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}/>

    </View>
  );
}
