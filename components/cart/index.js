import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View, CheckBox } from "react-native";
import CartList from "./CartList";

function Cart({ navigation }) {
  const listCart = [
    {
      _id: "1",
      product: {
        name: "hehessssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: 123,
        images: [
          "https://web5s.com.vn/cach-chup-anh-giay-dep/hinh-anh-cach-chup-anh-giay-dep_3_70527_700.jpg",
        ],
        _id: "1",
      },
      quantity: 3,
      size: 45,
      color: "red",
      userId: "1234",
    },
    {
      _id: "2",
      product: {
        name: "hehessssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: 123,
        images: [
          "https://web5s.com.vn/cach-chup-anh-giay-dep/hinh-anh-cach-chup-anh-giay-dep_3_70527_700.jpg",
        ],
        _id: "ooook",
      },
      quantity: 3,
      size: 45,
      color: "red",
      userId: "1234",
    },
    {
      _id: "3",
      product: {
        name: "hehessssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: 123,
        images: [
          "https://web5s.com.vn/cach-chup-anh-giay-dep/hinh-anh-cach-chup-anh-giay-dep_3_70527_700.jpg",
        ],
        _id: "ooook",
      },
      quantity: 3,
      size: 45,
      color: "red",
      userId: "1234",
    },
  ];
  const [listPayment, setListPayment] = useState([]);
  const [isSelectAll, setSelectAll] = useState(false);
  const addListPayment = (cartItem) => {
    if (!listPayment.includes(cartItem)) {
      setListPayment([...listPayment, cartItem]);
    }
  };
  const removePayment = (paymentItem) => {
    const newListPayment = listPayment.filter((item) => item !== paymentItem);
    setListPayment(newListPayment);
  };
  console.log(listPayment);
  useEffect(() => {
    if (isSelectAll) {
      let listPayment = [];
      for (let cartItem of listCart) {
        listPayment.push(cartItem._id);
      }
      setListPayment(listPayment);
    } else {
     if(listPayment.length === listCart.length){
      setListPayment([]);
     }
    }
  }, [isSelectAll]);
  useEffect(() => {
    if (listPayment.length !== listCart.length) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
  }, [listPayment]);
  return (
    <View style={styles.container}>
      <View style={styles.headerCart}>
        <Text style={styles.title}>Your Cart</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelectAll}
          onValueChange={setSelectAll}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Chọn tất cả</Text>
      </View>
      <CartList
        listPayment={listPayment}
        setListPayment={setListPayment}
        listCart={listCart}
        isSelectAll={isSelectAll}
        setSelectAll={setSelectAll}
        addListPayment={addListPayment}
        removePayment={removePayment}
      />

      <View style={styles.invoice}>
        <View style={styles.invoiceItem}>
          <Text style={styles.invoiceTitle}>Item(3)</Text>
          <Text style={styles.invoiceContent}>$123</Text>
        </View>
        <View style={styles.invoiceItem}>
          <Text style={styles.invoiceTitle}>Shipping</Text>
          <Text style={styles.invoiceContent}>$123</Text>
        </View>
        <View style={styles.invoiceItem}>
          <Text style={styles.invoiceTitle}>Import charges</Text>
          <Text style={styles.invoiceContent}>$124</Text>
        </View>
        <View style={[styles.invoiceItem, styles.totalPrice]}>
          <Text
            style={[
              styles.invoiceTitle,
              { fontWeight: "bold", color: "#223263" },
            ]}
          >
            Total Price
          </Text>
          <Text
            style={[
              styles.invoiceContent,
              { fontWeight: "bold", color: "#40BFFF" },
            ]}
          >
            $123
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  headerCart: {
    height: 70,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 5,
  },
  invoice: {
    width: 343,
    padding: 10,
    borderColor: "#EBF0FF",
    borderWidth: 1,
    borderRadius: 5,
  },
  invoiceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  invoiceTitle: {
    color: "#9098B1",
    fontSize: 12,
  },
  invoiceContent: {
    fontSize: 12,
    color: "#223263",
  },
  title: {
    color: "#223263",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: -220,
    marginBottom: -10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
