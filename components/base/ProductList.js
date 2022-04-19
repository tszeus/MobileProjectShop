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
import { Config } from "../../config/Config";
import { useNavigation } from "@react-navigation/native";
const ProductList = ({ navigation, type, horizontal = false, id }) => {
  const [data, setData] = useState([]); // data products
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    const apiURL = `${Config.BaseUrl}category/${id}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.nikeProduct}>
      <View style={styles.productHeading}>
        <Text style={styles.productName}>{type}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TypeFullProduct");
          }}
        >
          <Text style={styles.productSeeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          horizontal={horizontal}
          style={styles.productList}
          showsHorizontalScrollIndicator={!horizontal}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => (
            <ProductListItem
              item={item}
              type={type}
              keyExtractor={(item) => item.id}
            ></ProductListItem>
          )}
        ></FlatList>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productHeading: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productName: {
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
  productSeeMore: {
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
  },
  productList: { marginBottom: 20 },
});
