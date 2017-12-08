import React from "react";
import { View, Text } from "react-native";
import { Root } from "native-base";
import { DrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from "./screens/Profile";
import Timeline from "./screens/Timeline";

const RootDrawer = DrawerNavigator({
    Timeline: { screen: Timeline }
  },
  {
    initialRouteName: "Timeline",
    contentComponent: props => <Profile {...props} />
  }
);
  
export default RootDrawer;