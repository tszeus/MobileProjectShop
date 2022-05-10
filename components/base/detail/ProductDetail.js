import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColorsAndSizes from "./colorsAndSizes/ColorsAndSizes";
import ProductDescription from "./ProductDescription";
import Comment from "./comment/Review";
import CarouselImage from "./Carousel";

const ProductDetail = ({ route }) => {
  const sizes = route.params.item.sizes;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.goBackBox}
        >
          <MaterialIcons name="arrow-back-ios" style={styles.goBackIcon} />
          <Text style={styles.productTitle}>{route.params.item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Ionicons name="search" size={22} color="#9098B1" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselImage data={route.params.item.images} />
        <View style={styles.body} showsVerticalScrollIndicator={false}>
          <Text style={styles.productDetailNameBody}>
            {/* {route.params.item.name} */}
            Nike Air Zoom Pegasus 36 Miami
          </Text>
          <View style={styles.rating}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={route.params.item.vote_average}
              starSize={16}
              starStyle={{}}
              fullStarColor={"#FFC833"}
              emptyStarColor={"#EBF0FF"}
            />
          </View>
          <View style={styles.price}>
            <Text
              style={styles.priceText}
            >{`$${route.params.item.price}`}</Text>
          </View>
          {/* Size and Color */}
          <ColorsAndSizes sizes={sizes} />
          <ProductDescription />
          <Comment
            id={route.params.item._id}
            voteCount={route.params.item.vote_count}
            avgVote={route.params.item.vote_average}
          />
          <TouchableOpacity>
            <Text style={styles.addBtn}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 75 }} />
      </ScrollView>
    </View>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    marginTop: 40,
    paddingBottom: 15,
  },
  goBackBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    marginLeft: 20,
  },
  goBackIcon: {
    fontSize: 18,
    color: "#9098B1",
  },
  searchBtn: {
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 30,
    marginTop: 5,
  },
  productTitle: {
    fontSize: 18,
    color: "#223263",
    fontWeight: "bold",
    marginLeft: 5,
  },
  body: {
    marginTop: 40,
    marginHorizontal: 16,
    marginBottom: 70,
  },
  productDetailNameBody: {
    fontSize: 20,
    color: "#223263",
    fontWeight: "bold",
    marginBottom: 12,
  },
  rating: { width: 120, marginBottom: 12 },
  priceText: {
    fontSize: 20,
    color: "#40BFFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  addBtn: {
    width: "95%",
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#40BFFF",
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 20,
  },
});
