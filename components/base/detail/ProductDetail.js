import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CarouselImage from "../Carousel";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import Ionicons from "@expo/vector-icons/Ionicons";
import ColorsAndSizes from "./colorsAndSizes/ColorsAndSizes";
import ProductDescription from "./ProductDescription";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../api/productApi";
import SizeChoose from "./colorsAndSizes/SizeChoose";
import ColorChoose from "./colorsAndSizes/ColorChoose";
import {
  addCartAction,
  updateCartAction,
} from "./../../../redux/actions/cartAction";
import Loading from "./../../../commons/Loading";
import Notifycation from "../../../commons/Notifycation";
import { unwrapResult } from "@reduxjs/toolkit";
import Quantity from "./Quantity";
import Comment from "./comment/Review";
import CarouselImage from "./Carousel";
const ProductDetail = ({ route }) => {
  const sizes = route.params.item.sizes;
  const { _id } = route.params.item;
  const [currentProduct, setCurrentProduct] = useState();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.cart);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [messages, setMessages] = useState([]);
  const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { listCart } = useSelector((state) => state.cart);
  useEffect(() => {
    productApi
      .getProductById(_id)
      .then((product) => setCurrentProduct(product))
      .catch((err) => {
        console.log(err.message);
      });
  }, [_id]);
  const handleAddToCart = async () => {
    if (user) {
      const cartItem = listCart.find(
        (item) =>
          item?.product?._id === currentProduct?._id &&
          item.color === color &&
          item?.size === size
      );
      if (cartItem) {
        try {
          const res = await dispatch(
            updateCartAction({id:cartItem?._id, data:{
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }})
          );
          const result = unwrapResult(res);
          setMessages([
            ...messages,
            {
              content: " Added success",
              color: "green",
              icon: "check-circle",
            },
          ]);
        } catch (error) {
          setMessages([
            ...messages,
            {
              content: "Failed",
              color: "red",
            },
          ]);
        }
      } else {
        if (color && size) {
          const data = {
            product_id: currentProduct?._id,
            quantity,
            size,
            color,
            user_id: user._id,
          };
          try {
            const res = await dispatch(addCartAction(data));
            const result = unwrapResult(res);
            setMessages([
              ...messages,
              {
                content: " Added success",
                color: "green",
                icon: "check-circle",
              },
            ]);
          } catch (error) {
            setMessages([
              ...messages,
              {
                content: "Failed",
                color: "red",
              },
            ]);
          }
        } else if (!color && size) {
          setMessages([
            ...messages,
            {
              content: "Please choose color",
              color: "orange",
              icon: "warning",
            },
          ]);
        } else if (color && !size) {
          setMessages([
            ...messages,
            {
              content: "Please choose size",
              color: "orange",
              icon: "warning",
            },
          ]);
        } else {
          setMessages([
            ...messages,
            {
              content: "Please choose size and color",
              color: "orange",
              icon: "warning",
              icon: "stop-circle",
            },
          ]);
        }
      }
    } else {
      navigation.navigate("LoginNav");
    }
  };
  return (
    <View style={styles.container}>
      <Notifycation messages={messages} setMessages={setMessages} />
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
            {route.params.item.name}
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
         
          <SizeChoose sizes={currentProduct?.sizes} setSize={setSize} />
          <ColorChoose colors={currentProduct?.colors} setColor={setColor} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <ProductDescription />
          <Comment />
          <TouchableOpacity onPress={() => handleAddToCart()}>
            <Text style={styles.addBtn}>Add To Cart</Text>
          </TouchableOpacity>
          <Comment
            id={route.params.item._id}
            voteCount={route.params.item.vote_count}
            avgVote={route.params.item.vote_average}
          />
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
