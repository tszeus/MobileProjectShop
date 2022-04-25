import React, { useState } from "react";
import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import ShippingInputForm from "./ShippingInputForm";

function ShippingFormEdit({ shippingItem }) {
  const [infomationShipping, setInfomationShipping] = useState({
    name: shippingItem?.name || "",
    address: shippingItem?.address || "",
    phoneNumber: shippingItem?.phoneNumber || "",
  });
  const handleChange = (key) => (value) =>
    setInfomationShipping({
      ...infomationShipping,
      [key]: value,
    });
    const handleSubmit = () => {
      console.log(infomationShipping);
    }
  return (
    <View>
      <ShippingInputForm
        handleChange={handleChange('name')}
        value={infomationShipping.name}
        iconname="user"
        placeholder="Name"
      />
      <ShippingInputForm
        handleChange={handleChange('address')}
        value={infomationShipping.address}
        iconname="address-book"
        placeholder="Address"
      />
      <ShippingInputForm
        handleChange={handleChange('phoneNumber')}
        value={infomationShipping.phoneNumber}
        iconname="phone"
        placeholder="Phone number"
      />
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonAction}>
        <Text style={styles.textAction}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ShippingFormEdit;
const styles = StyleSheet.create({
  wrapInput: {
    width: 343,
    height: 48,
    borderColor: "#EBF0FF",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  buttonAction: {
    width: 343,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40BFFF",
    borderRadius: 5,
    marginTop: 20,
  },
  textAction: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
