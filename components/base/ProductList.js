import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import ProductListItem from "../base/ProductListItem";
const ProductList = ({ type, horizontal, data }) => {
  return (
    <View style={styles.nikeProduct}>
      <FlatList
        data={data}
        style={styles.productList}
        showsHorizontalScrollIndicator={false}
        numColumns={!horizontal ? 2 : 10}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => (
          <ProductListItem
            item={item}
            type={type}
            keyExtractor={(item) => item.id}
          ></ProductListItem>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productList: { marginBottom: 20 },
});
