import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/Navigation/Tabs";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
}
