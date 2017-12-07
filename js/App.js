import React from "react";
import { View, Text } from "react-native";
import { Root } from "native-base";
import { DrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from "./screens/Profile";
// import test from "./screens/test"



const RootDrawer = DrawerNavigator({
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     drawerLabel: 'Home',
    //     drawerIcon: ({ tintColor, focused }) => (
    //       <Ionicons
    //         name={focused ? 'ios-home' : 'ios-home-outline'}
    //         size={26}
    //         style={{ color: tintColor }}
    //       />
    //     ),
    //   },
    // },
    Profile: {
      screen: Profile,
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