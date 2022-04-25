import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Config } from "../../config/Config";
import ProductList from "../base/ProductList";
import PopupNoti from "../base/PopupNoti";

export default function SearchModel({ visible, data, reloadScreen }) {
	const navigation = useNavigation();
	const isFocused = useIsFocused(false);
	// Nếu chưa gõ search
	if (!visible) return <Text></Text>;

	const onPress = () => navigation.navigate("home");
	const button = { title: "Back to Home", onPress: onPress };

	// useEffect(() => {

	// }, [visible, notFound, data]);
	// useEffect(async () => {}, []);
	// notFound.length > 0 ? (
	// 	(<View>
	// 		<Text>{notFound}</Text>;
	// 	</View>)
	// ) : (
	return (
		<View style={styles.model}>
			<View>
				<Text style={styles.text}>
					{(data && data.total_products > 0 ? data.total_products : 0) +
						" Kết quả"}
				</Text>
			</View>
			{data && data.total_products == 0 ? (
				<View>
					<PopupNoti
						content={"thank you for shopping using suppershoes"}
						header={"Product Not Found"}
						button={button}
						icon={{ name: "close" }}
					></PopupNoti>
				</View>
			) : (
				<ProductList
					data={data && data.data ? data.data : []}
					btnSeeMore={false}
					horizontal={false}
					type={"Nike"}
					header={false}
					// reloadScreen={reloadScreen}
				></ProductList>
			)}
		</View>
	);
	// );
}
const styles = StyleSheet.create({
	model: {
		paddingTop: 10,
		flex: 1,
		paddingBottom: 10,
	},
    text: {
        color: "#223263",
        fontSize: 12,
        fontWeight: 'bold',
        opacity: 0.5
    }
});
