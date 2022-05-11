import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../components/Login/Login'
import ResgisterForm from "../components/Login/ResgisterForm";
import SplashScreen from "../screens/SplashScreen";

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Register"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={ResgisterForm} />
    </Stack.Navigator>
  );
};

export default LoginNav;

const styles = StyleSheet.create({});
