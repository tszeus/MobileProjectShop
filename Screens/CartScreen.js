import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import Cart from "../components/cart";

const CartScreen = () => {
  return (
    <ScrollView  style={{flex:1,paddingBottom:80,backgroundColor:'white'}}>
      <Cart />
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
