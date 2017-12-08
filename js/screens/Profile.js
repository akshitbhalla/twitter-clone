import React from "react";
import { View, Text } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Timeline from "./screens/Timeline/";
import Search from "./screens/Search";

const RootDrawer = DrawerNavigator({
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootDrawer;