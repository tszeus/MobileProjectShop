import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { typesProduct } from "../../db";
const NikeProducts = ({ type }) => {
  // const [data, setData] = useState([]);
  // console.log(typesProduct.Nike);
  var data = {};
  switch (type) {
    case "Nike":
      data = typesProduct.Nike;
      break;
    case "Puma":
      data = typesProduct.Puma;
      break;
    case "Adidas":
      data = typesProduct.Adidas;
      break;
    case "Vans":
      data = typesProduct.Vans;
      break;
  }
  // useEffect(() => {
  //   var api = "http://192.168.1.120:3000/typesProduct";
  //   fetch(api)
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       switch (type) {
  //         case "Nike":
  //           setData(posts.Nike);
  //           break;
  //         case "Puma":
  //           setData(posts.Puma);
  //           break;
  //         case "Adidas":
  //           setData(posts.Adidas);
  //           break;
  //         case "Vans":
  //           setData(posts.Vans);
  //           break;
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <View style={styles.nikeProduct}>
      <View style={styles.productHeading}>
        <Text style={styles.productName}>{type}</Text>
        <TouchableOpacity>
          <Text style={styles.productSeeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.productList}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          {
            /* console.log(item.url); */
          }
          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <View style={styles.item}>
                <View style={styles.itemImage}>
                  <Image
                    style={{ height: 109, width: 109, borderRadius: 5 }}
                    source={{ uri: item.url }}
                  />
                </View>
                <View style={styles.itemDisc}>
                  <View>
                    <Text style={styles.itemName}>{`${type} Product ${
                      index + 1
                    }`}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
                  </View>
                  <View style={styles.saleBox}>
                    <Text
                      style={styles.itemOldPrice}
                    >{`$${item.oldPrice}`}</Text>
                    <Text
                      style={styles.itemSaleOff}
                    >{`${item.saleOff}% Off`}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NikeProducts;

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
  itemImage: { borderRadius: 5, paddingBottom: 16 },
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
