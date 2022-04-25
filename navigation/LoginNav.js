import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/login/Login";
import ResgisterForm from "../components/login/ResgisterForm";
import SplashScreen from "../screens/SplashScreen";

const LoginNav = () => {
  const Stacks = createNativeStackNavigator();
  return (
    <Stacks.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stacks.Screen name="Login" component={Login} />
      <Stacks.Screen name="Register" component={ResgisterForm} />
    </Stacks.Navigator>
  );
};

export default LoginNav;

const styles = StyleSheet.create({});