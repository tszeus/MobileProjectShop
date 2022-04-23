import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "react-native-elements";

import { useEffect } from "react";

function CartItem({
  item,
  addListPayment,
  removePayment,
  isSelectAll,
  unSelectAll,
}) {
  const [isSelected, setSelection] = useState(false);
  useEffect(() => {
    if (!isSelected) {
      removePayment(item._id);
    } else {
      addListPayment(item._id);
    }
  }, [isSelected]);
  useEffect(() => {
    if (isSelectAll) {
      setSelection(true);
    } else {
      if (unSelectAll) {
        setSelection(false);
      }
    }
  }, [isSelectAll]);
  return (
    <View style={styles.container}>
      <View style={styles.infoProduct}>
        <CheckBox
          checked={isSelected}
          onPress={() => setSelection(!isSelected)}
          co
          style={styles.checkbox}
        />
        <Image
          style={{ height: 72, width: 72, borderRadius: 5 }}
          source={{
            uri: item?.product?.images[0],
          }}
        />
        <View style={styles.wrapInfoText}>
          <View style={styles.wrapNameSize}>
            <Text numberOfLines={1} style={styles.text}>
              {item.product.name}
            </Text>
            <Text style={styles.text}>
              {item.size} {item.color}
            </Text>
          </View>
          <Text style={[styles.text, { color: "#40BFFF" }]}>
            ${item.product.price}
          </Text>
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.textButtonAction}>-</Text>
        </TouchableOpacity>
        <View
          style={[{ flex: 1, backgroundColor: "#EBF0FF" }, styles.buttonAction]}
        >
          <Text style={[styles.textButtonAction]}>{item.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.textButtonAction}>+</Text>
        </TouchableOpacity>
      </View>
      <Icon style={styles.iconDelete} name="trash" size={20} color="#9098B1" />
    </View>
  );
}

export default CartItem;
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: 343,
    height: 104,
    borderColor: "#EBF0FF",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "relative",
  },
  infoProduct: {
    flexDirection: "row",
  },
  wrapInfoText: {
    justifyContent: "space-between",
    marginLeft: 10,
    height: 76,
  },

  wrapNameSize: {
    width: 158,
  },
  text: {
    color: "#223263",
    fontWeight: "bold",
    fontSize: 12,
  },
  action: {
    width: 124,
    height: 24,
    borderColor: "#EBF0FF",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  buttonAction: {
    width: 40,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonAction: {
    textAlign: "center",
    fontSize: 12,
    color: "grey",
  },
  iconDelete: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 10,
  },
});
