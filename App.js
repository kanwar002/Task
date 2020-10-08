import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import AppNavigations from "./apps/navigations/AppNavigations";
import Home from "./apps/screens/Home";

export default class App extends Component {
  render() {
    return <AppNavigations />;
  }
}
