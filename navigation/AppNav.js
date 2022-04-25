import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./ShopBottomNav";
import LoginNav from "./LoginNav";
import Home from "../components/home/Home";
import CustomInput from "../components/login/CustomInput";

const Nav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginNav" component={LoginNav} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

const AppNav = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
