import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
