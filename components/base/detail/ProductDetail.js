import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CarouselImage from "../Carousel";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import SizeChoose from "./SizeChoose";
import ColorChoose from "./ColorChoose";

const ProductDetail = ({ route }) => {
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9];
  const colors = [
    "#FFC833",
    "#40BFFF",
    "#FB7181",
    "#53D1B6",
    "#5C61F4",
    "#223263",
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.goBackBox}
      >
        <MaterialIcons name="arrow-back-ios" style={styles.goBackIcon} />
        <Text style={styles.productTitle}>{route.params.item.name}</Text>
      </TouchableOpacity>
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
              rating={3.5}
              starSize={16}
              starStyle={{}}
              fullStarColor={"#FFC833"}
            />
          </View>
          <View style={styles.price}>
            <Text
              style={styles.priceText}
            >{`$${route.params.item.price}`}</Text>
          </View>
          <View style={styles.selectSizeBox}>
            <Text style={styles.selectSize}>Select Size</Text>
            <SizeChoose data={sizes} />
          </View>
          <View style={styles.selectColorBox}>
            <Text style={styles.selectSize}>Select Color</Text>
            <ColorChoose data={colors} />
          </View>
          <View style={styles.productDescription}>
            <Text style={styles.specification}>Specification</Text>
            <View style={styles.typeBox}>
              <Text style={styles.shown}>Shown:</Text>

              <Text style={styles.type}>
                Laser Blue/Anthracite/Watermelon/White/Yellow
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 12, color: "#223263", width: "50%" }}>
                Style:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#9098B1",
                  width: "50%",
                  textAlign: "right",
                }}
              >
                CD0113-400
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#9098B1",
              lineHeight: 22,
              textAlign: "left",
              letterSpacing: 0.6,
            }}
          >
            The Nike Air Max 270 React ENG combines a full-length React foam
            midsole with a 270 Max Air unit for unrivaled comfort and a striking
            visual experience.
          </Text>
        </View>
        <View style={{ height: 75 }} />
      </ScrollView>
    </View>
  );
};
const is = false;
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  goBackBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    marginTop: 5,
  },
  goBackIcon: {
    fontSize: is ? 16 : 30,
    color: "#9098B1",
  },
  productTitle: {
    fontSize: 17,
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
  selectSizeBox: { marginBottom: 20 },
  selectSize: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#223263",
    marginBottom: 16,
  },
  selectColorBox: { marginBottom: 20 },
  specification: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#223263",
    marginBottom: 12,
  },
  typeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  shown: {
    fontSize: 12,
    color: "#223263",
    width: "50%",
  },
  type: {
    fontSize: 12,
    color: "#9098B1",
    width: "50%",
    textAlign: "right",
    textAlignVertical: "top",
    lineHeight: 22,
    letterSpacing: 0.5,
  },
});
