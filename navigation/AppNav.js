import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import BottomNav from "./ShopBottomNav";
import CategoryNav from "./CategoryNav";

const Nav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="BottomNav" component={BottomNav} />
      {/* <Stack.Screen name="TypeFullProduct" component={CategoryNav} /> */}
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
