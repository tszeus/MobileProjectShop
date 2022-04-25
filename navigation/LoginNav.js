import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ResgisterForm from "../components/Login/ResgisterForm";
import Login from "../components/Login/Login";

const LoginNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={ResgisterForm} />
    </Stack.Navigator>
  );
};

export default LoginNav;

const styles = StyleSheet.create({});
