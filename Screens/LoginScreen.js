import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../components/login/Login";
import ResgisterForm from "../components/login/ResgisterForm";

const LoginScreen = ({ navigation }) => {
  return (
    // <Login navigation={navigation} />;
    <ResgisterForm />
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
