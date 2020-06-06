import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../../componenets/Screen";
import ListItem from "../../componenets/ListItem";
import ImageFolder from "../../UrlImages/Me";
import Icon from "../../componenets/Icon";

import colors from "../config/color";

let Image_Http_URL = {
  uri: ImageFolder.ImageMe,
};

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Vincent Merrone"
          subTitle="vm947@nyu.edu"
          image={Image_Http_URL}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
