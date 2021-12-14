import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import StackNav from "./StackNav";

import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/Profile";

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "" : "-outline";

          switch (route.name) {
            case "Home":
              return (
                <Ionicons name={`home${tintColor}`} size={30} color="black" />
              );
            case "Search":
              return (
                <Ionicons name={`search${tintColor}`} size={30} color="black" />
              );
            case "Plus":
              return (
                <Ionicons
                  name={`add-circle${tintColor}`}
                  size={30}
                  color="black"
                />
              );
            case "Favorate":
              return (
                <Ionicons name={`heart${tintColor}`} size={30} color="black" />
              );
            case "Profile":
              return (
                <Ionicons name={`person${tintColor}`} size={30} color="black" />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={StackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Plus"
        component={StackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorate"
        component={StackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
