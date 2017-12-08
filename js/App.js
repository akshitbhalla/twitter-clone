import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Profile from "./screens/Profile";
import Timeline from "./screens/Timeline";
import Search from "./screens/Search";
// import test from "./screens/test";

const AppNavigator = StackNavigator(
    {
        Profile: { screen: Profile },
        Timeline: { screen: Timeline },
        Search: { screen: Search },
        // test: { screen: test }
    },
    {
        initialRouteName: "Profile",
        headerMode: "none",
    }
);

export default AppNavigator