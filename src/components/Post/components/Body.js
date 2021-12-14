import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../../styles/Global";

export default function Body({ post }) {
  return (
    <View>
      <Image
        source={{ uri: post.postUri }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    // width: "100%",
    // height: 400,
  },
});
