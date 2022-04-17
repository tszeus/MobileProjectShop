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

import ProductListItem from "../base/ProductListItem";
const TypesProducts = ({ type, horizontal = false, btnSeeMore = false, data}) => {
    console.log("data:",  data)

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
				{btnSeeMore ? (
					<TouchableOpacity>
						<Text style={styles.productSeeMore}>See More</Text>
					</TouchableOpacity>
				) : (
					true
				)}
			</View>
			<FlatList
				data={data}
				horizontal={horizontal}
				style={styles.productList}
				showsHorizontalScrollIndicator={!horizontal}
				keyExtractor={(item) => `${item._id}`}
				renderItem={({ item }) => (
					<ProductListItem item={item} type={type}></ProductListItem>
				)}
			></FlatList>
		</View>
	);
};

export default TypesProducts;

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
});
