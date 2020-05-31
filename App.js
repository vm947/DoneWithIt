import React from "react";
import {
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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="purple"
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "yes", onPress: () => console.log("Yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
