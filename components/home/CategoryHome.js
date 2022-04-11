import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryHome = ({ navigation }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.heading}>Category</Text>
      <View style={styles.categoryList}>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate("TypeFullProduct");
          }}
        >
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../static/images/simple-icons_nike.png")}
            />
          </View>
          <Text style={styles.categoryText}>Nike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate("TypeFullProduct");
          }}
        >
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../static/images/pumalogo.png")}
            />
          </View>
          <Text style={styles.categoryText}>Puma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate("TypeFullProduct");
          }}
        >
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../static/images/simple-icons_adidas.png")}
            />
          </View>
          <Text style={styles.categoryText}>Adidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate("TypeFullProduct");
          }}
        >
          <View>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../static/images/Vans-logo.png")}
            />
          </View>
          <Text style={styles.categoryText}>Vans</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryHome;

const styles = StyleSheet.create({
  category: {
    // flex: 1,
    marginVertical: 8,
  },
  heading: {
    color: "#223263",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  categoryList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 12,
  },
  categoryText: {
    color: "#9098B1",
    textAlign: "center",
  },
});
