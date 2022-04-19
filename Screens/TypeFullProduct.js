import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import TypeList from "../components/home/TypeList";

const TypeFullProduct = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.goBackBox}
      >
        <MaterialIcons name="arrow-back-ios" style={styles.goBackIcon} />
        <Text style={styles.categoryName}>Nike</Text>
      </TouchableOpacity>
      <TypeList data={route.params.data} horizontal={route.params.horizontal} />
    </View>
  );
};

export default TypeFullProduct;

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
    height: 80,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  goBackIcon: {
    fontSize: 16,
    color: "#9098B1",
  },
  categoryName: {
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
});
