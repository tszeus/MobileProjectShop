import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Header = ({header, haveBack = false}) => {
    const navigation = useNavigation();
	return (
		<View style={styles.header}>
			{ haveBack &&<TouchableOpacity onPress={() => navigation.goBack()}>
				<Icon style={styles.navigateBack} name="navigate-before"></Icon>
			</TouchableOpacity>}
			<Text style={styles.title}>{header}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		height: "15%",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
        marginLeft: 16,
        borderBottomColor: "#EBF0FF",
        borderBottomWidth: 1
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#223263",
	},
	navigateBack: {
		fontSize: 24,
        color: "#9098B1"
	},
});
