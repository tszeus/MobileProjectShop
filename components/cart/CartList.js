import React from "react";
import { FlatList } from "react-native";
import CartItem from "./CartItem";

function CartList({
  listCart,
  listPayment,
  isSelectAll,
  addListPayment,
  removePayment,
}) {
  return (
   listCart.map(item => (
<CartItem
          unSelectAll={listCart.length === listPayment.length}
          isSelectAll={isSelectAll}
          addListPayment={addListPayment}
          removePayment={removePayment}
          key={item._id}
          item={item}
        />
   ))
    // <FlatList
    //   style={{ padding: 10 ,height:400}}
    //   data={listCart}
    //   keyExtractor={(item) => item?._id}
    //   renderItem={({ item }) => (
        
    //   )}
    // />
  );
}

export default CartList;
