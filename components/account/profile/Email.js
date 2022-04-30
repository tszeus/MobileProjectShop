import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../base/Header";
import CustomInput from "../../login/CustomInput";
import { useIsFocused } from "@react-navigation/native";

const Email = ({ navigation, route }) => {
	

	return (
		<View style={styles.wrapper}>
			<Header style={styles.header} header="Email" haveBack={true}></Header>
			<Text style={styles.label}>Change Email</Text>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.5}
				onPress={() => {}}
			>
				<Text style={styles.textButton}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Email;

const styles = StyleSheet.create({
	wrapper: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingTop: 116,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#223263",
		marginBottom: 12,
	},
	button: {
		marginTop: 16,
		backgroundColor: "#40BFFF",
		width: "100%",
		padding: 16,
		alignItems: "center",
		borderRadius: 5,
		height: 57,
		justifyContent: "center",
		alignContent: "flex-end",
	},
	textButton: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
});
