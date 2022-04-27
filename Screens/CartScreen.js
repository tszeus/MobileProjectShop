import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import Cart from "../components/cart";

const CartScreen = () => {
  return (
    <View
      style={{
        paddingBottom: 80,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight,

        flex: 1,
      }}
    >
      <Cart />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
