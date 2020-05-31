import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>I Love You Monkey!! You are the best!</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped!")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        />
      </TouchableNativeFeedback>
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
