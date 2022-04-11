import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const TypeFullProduct = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypeFullProduct;

const styles = StyleSheet.create({});
