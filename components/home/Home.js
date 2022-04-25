import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import CategoryHome from "./CategoryHome";
import homeApi from "../api/homeApi";
import ProductList from "../base/ProductList";
import SplashScreen from "../../screens/SplashScreen";

const Home = ({ navigation }) => {
  const [homeData, setHomeData] = useState([]); // Mảng type
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTypes();
  }, []);
  const fetchTypes = async () => {
    try {
      const categoriesResponse = await homeApi.getProductsHome().finally(() => {
        setIsLoading(false);
      });
      setHomeData(categoriesResponse);
    } catch (error) {
      console.log(error);
    }
  };
  const categoryProducts = homeData.map((item) => ({
    _id: item._id,
    name: item.name,
  }));
  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
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
            <CategoryHome navigation={navigation} types={categoryProducts} />
          </View>

          <FlatList
            // style={{ marginBottom: 250 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            data={homeData}
            renderItem={({ item }) => (
              <View>
                <View style={styles.productHeading}>
                  <Text style={styles.productName}>{item.name}</Text>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("TypeFullProduct", {
                        type: item.name,
                        data: categoryProducts,
                      });
                    }}
                  >
                    <Text style={styles.productSeeMore}>See More</Text>
                  </TouchableOpacity>
                </View>
                <ProductList
                  navigation={navigation}
                  data={item.data}
                  horizontal={true}
                  type={item.name}
                />
              </View>
            )}
          />
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
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
  productHeading: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productName: {
    fontSize: 17,
    color: "#223263",
    fontWeight: "bold",
  },
  productSeeMore: {
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
  },
});
