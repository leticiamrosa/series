import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginPage from "./src/pages/LoginPage";

const RootStack = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: () => ({
      title: "Minhas Series",
      headerTintcolor: "#eee",
      headerStyle: {
        backgroundColor: "#734098",
        borderBottomWidth: 1,
        borderBottomColor: "#734098"
      },
      headerTitleStyle: {
        color: "#eee"
      }
    })
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
