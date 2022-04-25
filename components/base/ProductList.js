import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

import ProductItem from "./ProductItem";
const ProductList = ({ type, horizontal, data }) => {
  return (
    <View style={styles.nikeProduct}>
      {horizontal ? (
        <FlatList
          data={data}
          style={styles.productList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              type={type}
              keyExtractor={(item) => item._id}
            ></ProductItem>
          )}
        />
      ) : (
        <FlatList
          data={data}
          style={styles.productList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              type={type}
              keyExtractor={(item) => item._id}
            ></ProductItem>
          )}
        />
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productList: { marginBottom: 20 },
});
