import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/Global";
import ProfilePictures from "../../ProfilePictures";

const menuIcon = require("../../../../assets/images/menu_icon.png");

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header({ post: { user } }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProfilePictures uri={user.imageUri} size={40} />
        <Text style={globalStyles.titleTextBold}>{user.name}</Text>
      </View>
      <View>
        <Image
          source={menuIcon}
          resizeMode="cover"
          style={{ width: 25, height: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,

    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
