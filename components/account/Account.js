import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../base/Header";
import Field from "./Field";
import { FieldRoleConstant } from "../../commons/constants/field-role.constant";

const Account = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<Header header="Account"></Header>
			{FieldRoleConstant.map((item, index) => (
				<Field
                    key={index}
					label={item.label}
					iconName={item.iconName}
                    onPress={() => navigation.navigate(item.label)}
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
	},
	header: {
		height: 80,
		alignItems: "center",
		flexDirection: "row",
	},
});
