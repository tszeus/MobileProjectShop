import React from "react";
import { View, FlatList } from "react-native";
import { ScrollView, Text, StyleSheet, CheckBox } from "react-native";

import CartItem from "./CartItem";
function CartList({
  listCart,
  listPayment,
  setListPayment,
  isSelectAll,
  setSelectAll,
  addListPayment,
  removePayment,
}) {
  return (
    <FlatList
      style={{ padding: 10 }}
      data={listCart}
      renderItem={({ item }) => (
        <CartItem
          unSelectAll={listCart.length === listPayment.length}
          isSelectAll={isSelectAll}
          addListPayment={addListPayment}
          removePayment={removePayment}
          key={item._id}
          item={item}
        />
      )}
    />
  );
}

export default CartList;
