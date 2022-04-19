import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import CategoryHome from "./CategoryHome";
// import BottomNav from "../../navigation/ShopBottomNav";
import { typesProduct } from "../../db";
import axios from "axios";
import { Config } from "../../config/Config";
import ProductList from "../base/ProductList";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = ({ navigation }) => {
  const [types, setTypes] = useState(["Nike", "Puma", "Adidas", "Vans"]); // Mảng type
  const [data, setData] = useState([]); // data products
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    const apiURL = `${Config.BaseUrl}category/`;
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
    <View style={styles.homePage}>
      <View style={styles.homeSearch}>
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={16} color="#40BFFF" />
        </View>
        <TextInput
          placeholder="Search Product"
          onFocus={() => {
            navigation.navigate("search");
          }}
        />
      </View>
      <View style={styles.category}>
        <CategoryHome navigation={navigation} data={data} horizontal={true} />
      </View>
      <ScrollView style={{ marginBottom: 250 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {data.map((item, index) => (
              <ProductList
                navigation={navigation}
                key={index}
                id={item?._id}
                    horizontal={true}
                    btnSeeMore={true}
                type={item.name}
              />
            ))}
          </View>
        )}
      </ScrollView>
      {/* <BottomNav /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homePage: {
    // flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingTop: 50,
    // flexDirection: "column",
    // justifyContent: "flex-start",
  },
  homeSearch: {
    flexDirection: "row",
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 8,
  },
  searchIcon: {
    paddingHorizontal: 16,
  },
  category: {
    // position: "absolute",
  },
});
