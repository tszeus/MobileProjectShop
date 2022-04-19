import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

/**
 * Item trong list product
 * @param {*} param0
 * @returns
 */
export default function ProductListItem({ item, type }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetail");
      }}
    >
      <View style={styles.item}>
        <View style={styles.itemImage}>
          <Image
            style={{ height: 109, width: 109, borderRadius: 5 }}
            source={{
              uri: `https://sever-mobile-1.herokuapp.com${item.images[0]}`,
            }}
          />
        </View>
        <View style={styles.itemDisc}>
          <View>
            <Text style={styles.itemName}>{`${type} Product`}</Text>
          </View>
          <View>
            <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
          </View>
          <View style={styles.saleBox}>
            <Text style={styles.itemOldPrice}>{`$${
              item.price + (item.discount * item.price) / 100
            }`}</Text>
            <Text style={styles.itemSaleOff}>{`${item.discount}% Off`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemImage: { borderRadius: 5, paddingBottom: 16 },
  item: {
    borderColor: "#EBF0FF",
    borderWidth: 1,
    width: 141,
    // height: 238,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    borderRadius: 8,
  },
  itemName: {
    color: "#223263",
    fontWeight: "bold",
    marginBottom: 12,
  },
  itemPrice: {
    color: "#40BFFF",
    fontWeight: "bold",
  },
  saleBox: { flexDirection: "row", marginTop: 12, justifyContent: "center" },
  itemOldPrice: {
    fontSize: 12,
    justifyContent: "center",
    alignContent: "center",
    marginRight: 12,
    color: "#9098B1",
    textDecorationLine: "line-through",
  },
  itemSaleOff: {
    fontSize: 12,
    color: "#FB7181",
    fontWeight: "bold",
  },
});
