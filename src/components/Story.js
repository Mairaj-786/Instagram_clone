import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePictures from "./ProfilePictures";

const Story = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <ProfilePictures uri={imageUrl} />
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: 110,
  },
  userName: {
    color: "#000",
    fontWeight: "500",
    opacity: 0.7,
  },
});

export default Story;
