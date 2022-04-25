import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import ShippingList from "./ShippingList";
export const ShippingContext = React.createContext();

function Shipping(props) {
  const list = [
    {
      _id: "1",
      name: "Hoang Van Thanh",
      address:
        "Ngo 20 Hồ Tùng Mậu Cầu giấy Hà Nộikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      phoneNumber: "123455677",
      default: true,
    },
    {
      _id: "2",
      name: "Hoang Van Thanh",
      address: "Ngo 20 Hồ Tùng Mậu Cầu giấy Hà Nội",
      phoneNumber: "123455677",
      default: false,
    },
    {
      _id: "3",
      name: "Hoang Van Thanh",
      address: "Ngo 20 Hồ Tùng Mậu Cầu giấy Hà Nội",
      phoneNumber: "123455677",
      default: false,
    },
    {
      _id: "4",
      name: "Hoang Van Thanh",
      address: "Ngo 20 Hồ Tùng Mậu Cầu giấy Hà Nội",
      phoneNumber: "123455677",
      default: false,
    },
  ];
  
  const shippingReducer = (state, action) => {
    switch (action.type) {
      case "ADD_SHIPPING": {
        const { newShipping } = action.payload;
        return {
          ...state,
          listShipping: [newShipping].concat(state.listShipping),
        };
      }
      case "UPDATE_SHIPPING": {
        const { id, newShipping } = action.payload;
        const index = state.listShipping.findIndex((item) => item._id === id);
        const newListShipping = [
          ...state.listShipping.slice(0, index),
          newShipping,
          ...state.listShipping.slice(index + 1),
        ];
        return {
          ...state,
          listShipping: newListShipping,
        };
      }
      case "DELETE_SHIPPING": {
        const { id } = action.payload;
        return {
          ...state,
          listShipping: state.listShipping.filter((item) => item._id !== id),
        };
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(shippingReducer, { listShipping: list });
  const [currentIdShipping, setCurrenIdShipping] = useState(
    state?.listShipping[0]?._id || ''
  );
  const navigation = useNavigation();
  const handleFinish = () => {
    navigation.pop();
    navigation.navigate("Success");
  };
  // useEffect(() => {
  //   setListShipping(list);
  // }, []);
  return (
    <ShippingContext.Provider
      value={{
        dispatch,
      }}
    >
      {state.listShipping.length > 0 ? <View contentContainerStyle={styles.container}>
        <ScrollView>
          <ShippingList
            listShipping={state.listShipping}
            currentIdShipping={currentIdShipping}
            setCurrenIdShipping={setCurrenIdShipping}
          />
          <TouchableOpacity
            onPress={() => handleFinish()}
            style={styles.actionButton}
          >
            <Text style={styles.textAction}>Finish</Text>
          </TouchableOpacity>
        </ScrollView>
      </View> : <View style={styles.noShipping}>
      <Text style={styles.textNoshipping }>Chưa có địa chỉ,nhấn vào biểu tượng bên góc trên bên phải để thêm</Text></View>}
    </ShippingContext.Provider>
  );
}
export default Shipping;
const styles = StyleSheet.create({
  container: {},
  actionButton: {
    width: 343,
    height: 57,
    backgroundColor: "#40BFFF",
    borderRadius: 5,
    justifyContent: "center",
  },
  textAction: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  noShipping:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    padding:20
  },
  textNoshipping:{
    textAlign:'center',
    fontSize:16,
    color:'#223263',
    fontWeight:'bold'
  }

});
