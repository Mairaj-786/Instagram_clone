import React from "react";
import { View, Text, Image } from "react-native";

const IMg = require("https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");

export default function ProfilePictures({ uri, size = 60 }) {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 3,
        height: size + 7,
        width: size + 7,
        borderRadius: 40,
        borderColor: "#2f82ed",
      }}
    >
      <Image
        source={{ uri }}
        resizeMode="cover"
        style={{
          width: size,
          height: size,
          borderWidth: 2,
          borderRadius: 100,
        }}
      />
    </View>
  );
}
