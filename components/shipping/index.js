import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text,ScrollView } from "react-native";
import ShippingList from "./ShippingList";
function Shipping(props) {
  const listSipping = [
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
  const [currentIdShipping, setCurrenIdShipping] = useState(listSipping[0]._id);
  const navigation = useNavigation();
  const handleFinish = () => {
      navigation.navigate('Success')
  }
  return (
    <View contentContainerStyle={styles.container}>
     
    <ScrollView>
    <ShippingList
        listSipping={listSipping}
        currentIdShipping={currentIdShipping}
        setCurrenIdShipping={setCurrenIdShipping}
      />
      <TouchableOpacity onPress={() => handleFinish()} style={styles.actionButton}>
        <Text style={styles.textAction}>Finish</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}
export default Shipping;
const styles = StyleSheet.create({
  container: {},
  actionButton: {
    width: 343,
    height: 57,
    backgroundColor: "#40BFFF",
    borderRadius:5,
    justifyContent:'center'
  },
  textAction:{textAlign:'center',fontWeight:'bold',fontSize:14,color:'white'}
});
