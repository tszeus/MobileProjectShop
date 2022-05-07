import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../base/Header";
import Field from "./Field";
import { FieldRoleConstant } from "../../commons/constants/field-role.constant";
import Login from "./../login/Login";

const Account = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Header header="Account"></Header>
      {FieldRoleConstant.map((item, index) => (
        <Field
          key={index}
          label={item.label}
          iconName={item.iconName}
          onPress={() =>
            item.label !== "Logout"
              ? navigation.navigate(item.label)
              : navigation.navigate("Login")
          }
        ></Field>
      ))}
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 100
  },
  header: {
    height: 80,
    alignItems: "center",
    flexDirection: "row",
  },
});
