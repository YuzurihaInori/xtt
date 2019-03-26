import React, { PureComponent } from "react";

import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import RouteConfig from "./config/Route";
import StackNavigatorConfig from "./config/StackNavigatorConfig";
import Rank from "./screen/main/Rank";
import Message from "./screen/main/Message";
import Mine from "./screen/main/Mine";
import Home from "./screen/main/Home";

import { Image, View, Text } from "react-native";

const SELECTED_COLOR = "#ea7c7c";
const UNSELECTED_COLOR = "#aaaaaa";

const ICON = {
  chat_checked: require("./image/main_chat_checked.png"),
  chat_uncheck: require("./image/main_chat_uncheck.png"),
  rank_checked: require("./image/main_rank_checked.png"),
  rank_uncheck: require("./image/main_rank_uncheck.png"),
  msg_checked: require("./image/main_msg_checked.png"),
  msg_uncheck: require("./image/main_msg_uncheck.png"),
  mine_checked: require("./image/main_mine_checked.png"),
  mine_uncheck: require("./image/main_mine_uncheck.png")
};

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? ICON["chat_checked"] : ICON["chat_uncheck"]}
            style={{
              width: 22,
              height: 22
            }}
          />
        )
      }
    },
    Rank: {
      screen: Rank,
      navigationOptions: {
        tabBarLabel: "排行",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? ICON["rank_checked"] : ICON["rank_uncheck"]}
            style={{
              width: 22,
              height: 22
            }}
          />
        )
      }
    },
    Message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: "消息",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? ICON["msg_checked"] : ICON["msg_uncheck"]}
            style={{
              width: 22,
              height: 22
            }}
          />
        )
      }
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? ICON["mine_checked"] : ICON["mine_uncheck"]}
            style={{
              width: 22,
              height: 22
            }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: "#aaaaaa",
      activeTintColor: "#ea7c7c",
      labelStyle: {
        fontSize: 11
      }
    }
  }
);

const Navigator = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
