import React, { useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Item trong list product
 * @param {*} param0
 * @returns
 */
export default function ProductListItem({ item, type }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate("ProductDetail");
			}}
			style={styles.productListItem}
		>
			<View style={styles.item}>
				<View style={styles.itemImage}>
					<Image
                    style={styles.image}
						source={{
							uri: `${item.images[0]}`,
						}}
					/>
				</View>
				<View style={styles.itemDisc}>
					<View>
						<Text style={styles.itemName}>{item.name}</Text>
					</View>
					<View>
						<Text style={styles.itemPrice}>{`$${item.price}`}</Text>
					</View>
					<View style={styles.saleBox}>
						<Text style={styles.itemOldPrice}>{`$${
							item.price + (item.discount * item.price) / 100
						}`}</Text>
						<Text style={styles.itemSaleOff}>{`${item.discount}% Off`}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	productListItem: {
		marginBottom: 16,
		width: "50%",
	},
	itemImage: { borderRadius: 5, paddingBottom: 16 },
    image: {
        borderRadius: 5,
        width: 133,
        height: 133,
        backgroundColor: "#E8E8E8"
    },
	item: {
		borderColor: "#EBF0FF",
		borderWidth: 1,
		justifyContent: "flex-start",
		borderRadius: 8,
		flex: 1,
		marginHorizontal: 8,
		// height: 238,
		padding: 16,
	},
	itemName: {
		color: "#223263",
		fontWeight: "bold",
		marginBottom: 12,
	},
	itemPrice: {
		color: "#40BFFF",
		fontWeight: "bold",
	},
	saleBox: { flexDirection: "row", marginTop: 4 },
	itemOldPrice: {
		fontSize: 12,
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
