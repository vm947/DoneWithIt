import React from "react";
import { View } from "react-native";

function Shadows() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //elevation is the only
          //shadow property of Android
          elevation: 30,
          //Only applys to IOS
          //shadowColor: 'grey',
          //shadowOffset: {width: 0 , height: 10},
          //shadowOpacity: 1,
          //shadowRadius: 10,
        }}
      ></View>
    </View>
  );
}

export default Shadows;
