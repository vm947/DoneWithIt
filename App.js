import React, {useState} from "react";
import { View, TextInput, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./componenets/AppButton";
import Card from "./componenets/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./componenets/Screen";
import Icon from "./componenets/Icon";
import ListItem from "./componenets/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./componenets/AppTextInput";

export default function App() {

  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput 
      placeholder="Username"
      icon ="email"
      />
    </Screen>
  );
}
