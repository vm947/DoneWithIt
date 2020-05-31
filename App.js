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
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="purple"
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
