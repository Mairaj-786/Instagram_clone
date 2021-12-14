import React from "react";
import { View, Text } from "react-native";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Post = ({ post }) => {
  return (
    <View>
      <Header post={post} />
      <Body post={post} />
      <Footer />
    </View>
  );
};

export default Post;
