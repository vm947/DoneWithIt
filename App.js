import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./componenets/AppButton";
import Card from "./componenets/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./componenets/Screen";
import Icon from "./componenets/Icon";
import ListItem from "./componenets/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem title={"My title"} ImageComponent={<Icon name="email" />} />
    </Screen>
  );
}
