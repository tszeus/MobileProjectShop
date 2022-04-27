import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View ,ScrollView} from "react-native";
import { CheckBox } from "react-native-elements";
import CartInvoice from "./CartInvoice";
import CartList from "./CartList";

function Cart() {
  const navigation = useNavigation();
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
    {
      _id: "4",
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
      _id: "5",
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
      _id: "6",
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
      _id: "7",
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
  const totalItems = listPayment.reduce((totalItems, item) => {
    return (
      totalItems + listCart.find((cartItem) => cartItem._id === item)?.quantity
    );
  }, 0);
  const totalPrice = listPayment.reduce((totalPrice, item) => {
    const currentItem = listCart.find((cartItem) => cartItem._id === item);
    return totalPrice + currentItem?.product.price * currentItem.quantity;
  }, 0);

  const addListPayment = (cartItem) => {
    if (!listPayment.includes(cartItem)) {
      setListPayment([...listPayment, cartItem]);
    }
  };
  const removePayment = (paymentItem) => {
    const newListPayment = listPayment.filter((item) => item !== paymentItem);
    setListPayment(newListPayment);
  };
  const handleCheckOut = () => {
    navigation.navigate("Ship To");
  };
  useEffect(() => {
    if (isSelectAll) {
      let listPayment = [];
      for (let cartItem of listCart) {
        listPayment.push(cartItem._id);
      }
      setListPayment(listPayment);
    } else {
      if (listPayment.length === listCart.length) {
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
  return listCart.length > 0 ? (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isSelectAll}
          onPress={() => setSelectAll(!isSelectAll)}
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
      <View style={{marginTop:10}}>
        <CartInvoice totalItems={totalItems} totalPrice={totalPrice} />
        <TouchableOpacity
          onPress={() => handleCheckOut()}
          style={styles.buttonCheckOut}
          disabled={totalItems === 0}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  ) : (
    <View style={styles.noCart}>
      <Text style={styles.titleNocart}>
        Chưa có sản phẩm nào trong giỏ hàng
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 12, color: "#40BFFF" }}>
          Quay trở lại trang chủ
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
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

  title: {
    color: "#223263",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: -185,
    marginBottom: -10,
    justifyContent:'center',
    alignItems:'center'
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 0,
  },
  buttonCheckOut: {
    width: 343,
    height: 57,
    backgroundColor: "#40BFFF",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 10,
  },
  noCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  titleNocart: {
    fontSize: 12,
  },
});
