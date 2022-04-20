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
import StarRating from "react-native-star-rating";

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
        navigation.navigate("ProductDetail", { item });
      }}
      style={styles.productItem}
    >
      <View style={styles.item}>
        <View style={styles.itemImage}>
          <Image
            style={{ height: 148, width: 148, borderRadius: 6 }}
            source={{
              uri: item.images[0],
            }}
          />
        </View>
        <View style={styles.itemDisc}>
          <View>
            <Text style={styles.itemName}>{`${type} Product`}</Text>
          </View>
          <View style={styles.rating}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={3.5}
              starSize={13}
              starStyle={{}}
              fullStarColor={"#ffce3d"}
            />
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
  productItem: { marginBottom: 16, justifyContent: "space-around" },
  itemImage: { borderRadius: 5, paddingBottom: 16 },
  itemDisc: { justifyContent: "flex-start" },
  item: {
    borderColor: "#EBF0FF",
    borderWidth: 1,
    width: 180,
    // height: 238,
    marginRight: 16,
    // alignItems: "center",
    // justifyContent: "flex-start",
    padding: 16,
    borderRadius: 10,
  },
  itemName: {
    color: "#223263",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  rating: { width: 80, marginBottom: 8 },
  itemPrice: {
    color: "#40BFFF",
    fontWeight: "bold",
  },
  saleBox: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },
  itemOldPrice: {
    fontSize: 13,
    justifyContent: "center",
    alignContent: "center",
    marginRight: 12,
    color: "#9098B1",
    textDecorationLine: "line-through",
  },
  itemSaleOff: {
    fontSize: 13,
    color: "#FB7181",
    fontWeight: "bold",
  },
});
