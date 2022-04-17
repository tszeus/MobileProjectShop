import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useState, useEffect} from "react";
import CategoryHome from "./CategoryHome";
import TypesProducts from "./TypesProducts";
// import BottomNav from "../../navigation/ShopBottomNav";
import { typesProduct } from "../../db";
const Home = ({ navigation }) => {
	const [data, setData] = useState({});
    const [types , setTypes] = useState(['Nike', 'Puma', 'Adidas', 'Vans'])
	useEffect(() => {
        types.forEach(type => {
            setData((prev) => ({
                ...prev,
                [type]: typesProduct[type]
            }));
        });
	}, []);
	return (
		<View style={styles.homePage}>
			<View style={styles.homeSearch}>
				<View style={styles.searchIcon}>
					<Ionicons name="search" size={16} color="#40BFFF" />
				</View>
				<TextInput placeholder="Search Product" />
			</View>
			<View style={styles.category}>
				<CategoryHome navigation={navigation} />
			</View>
			<ScrollView
				// showsVerticalScrollIndicator={false}
				style={{ marginBottom: 250 }}
			>
				{types.map(item => 
                    <TypesProducts key={item._id} data={data[item]} btnSeeMore={true} horizontal={true} type={item} />
                )}
			</ScrollView>
			{/* <BottomNav /> */}
		</View>
	);
};


export default Home;

const styles = StyleSheet.create({
	homePage: {
		// flex: 1,
		paddingHorizontal: 16,
		backgroundColor: "#fff",
		paddingTop: 50,
		// flexDirection: "column",
		// justifyContent: "flex-start",
	},
	homeSearch: {
		flexDirection: "row",
		width: "100%",
		borderColor: "#ccc",
		borderWidth: 1,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "flex-start",
		borderRadius: 8,
	},
	searchIcon: {
		paddingHorizontal: 16,
	},
	category: {
		// position: "absolute",
	},
});
