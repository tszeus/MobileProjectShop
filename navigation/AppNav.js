import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import LoginScreen from "../screens/LoginScreen";
import BottomNav from "./ShopBottomNav";
import LoginNav from "./LoginNav";

const Nav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen  name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
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
