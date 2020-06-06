import React, { useState } from "react";
import Screen from "../../componenets/Screen";
import { FlatList, StyleSheet, View, Platform, StatusBar } from "react-native";
import ImageFolder from "../../UrlImages/Me";

import ListItem from "../../componenets/ListItem";
import ListItemSeperator from "../../componenets/ListItemSeperator";
import ListItemDeleteAction from "../../componenets/ListItemDeleteAction";

let Image_Http_URL = {
  uri: ImageFolder.ImageMe,
};

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: Image_Http_URL,
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: Image_Http_URL,
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing]=useState(false);
  
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh = {() =>{
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: Image_Http_URL,
            },
          ])
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
