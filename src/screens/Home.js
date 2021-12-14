import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Feeds from "../components/Feeds";
import Stories from "../components/Stories";
import TopHeader from "../constants/TopHeader";

const proImg = require("../../assets/images/pro.jpg");

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <TopHeader />
      <ScrollView style={{ marginHorizontal: 2 }}>
        <Stories navigation={navigation} />
        <Feeds />
      </ScrollView>
    </SafeAreaView>
  );
}
