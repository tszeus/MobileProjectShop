import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";

/**
 * Danh sách list product
 * @param {} param0
 * @returns
 * @author: PVTRONG (17/4/2022)
 */
const ProductList = ({ navigation, data, reloadScreen }) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
                <Text></Text>
				// <EmployeeListItem
				// 	positions={positions}
				// 	departments={departments}
				// 	onEdit={() => {
				// 		navigation.navigate("AddEmployee", {
				// 			mode: ModeEnum.edit,
				// 			employee: item,
				// 			positions: positions,
				// 			departments: departments,
				// 			reloadScreen: reloadScreen,
				// 		});
				// 	}}
				// 	activeSwipe={activeSwipe}
				// 	reloadScreen={reloadScreen}
				// 	setActiveSwipe={(id) => {
				// 		setActiveSwipe(id), console.log(id);
				// 	}}
				// 	employee={item}
				// 	onPress={() =>
				// 		navigation.navigate("Employee", {
				// 			employeeId: item.id,
				// 			positions: positions,
				// 			departments: departments,
				// 			reloadScreen: reloadScreen,
				// 		})
				// 	}
				// />
			)}
			keyExtractor={(item) => `${item._id}`}
			contentContainerStyle={{
				paddingLeft: 16,
				paddingRight: 16,
			}}
		></FlatList>
	);
};

export default ProductList;
