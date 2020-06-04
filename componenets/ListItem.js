import React from "react";
import Apptext from "./AppText";
import { View, StyleSheet, Image } from "react-native";

import colors from "../app/config/color";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Apptext style={styles.title}>{title}</Apptext>
        <Apptext style={styles.subTitle}>{subTitle}</Apptext>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
