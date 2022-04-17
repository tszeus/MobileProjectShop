import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Config } from "../../config/Config";
import ProductList from "../base/ProductList";

export default function SearchModel({ visible, data, notFound, reloadScreen }) {
	const navigation = useNavigation();
	const [activeSwipe, setActiveSwipe] = useState(null);
	const isFocused = useIsFocused(false);
	console.log("notFound: ", notFound);
	useEffect(() => {
		if (!visible) return null;

		if (!visible && data && data.total_products == 0 && !notFound) return null;
	}, [visible, notFound, data]);
	useEffect(async () => {
		// try {
		// 	var res = await axios.get(`${Config.BaseUrl}/positions`);
		// 	setPositions(res.data);
		// } catch (err) {
		// 	console.log(err);
		// }
		// try {
		// 	var departmentRes = await axios .get(`${Config.BaseUrl}/departments`)
		// 	setDepartments(departmentRes.data);
		// } catch (err) {
		// 	console.log(err);
		// }
	}, []);
// notFound.length > 0 ? (
	// 	(<View>
	// 		<Text>{notFound}</Text>;
	// 	</View>)
	// ) : (
	return (<View style={styles.model}>
			<View>
				<Text>
					{(data && data.total_products > 0 ? data.total_products : 0) +
						" Kết quả"}
				</Text>
			</View>
			<ProductList data={data && data.data? data.data: []} reloadScreen={reloadScreen}></ProductList>
		</View>)
	// );
}
const styles = StyleSheet.create({
	model: {
		paddingTop: 10,
		flex: 1,
		paddingBottom: 10,
	},
});
