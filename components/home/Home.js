import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useState, useEffect} from "react";
import CategoryHome from "./CategoryHome";
// import BottomNav from "../../navigation/ShopBottomNav";
import { typesProduct } from "../../db";
import axios from "axios";
import { Config } from "../../config/Config";
import ProductList from "../base/ProductList";
const Home = ({ navigation }) => {
	const [data, setData] = useState({}); // data products
    const [types , setTypes] = useState(['Nike', 'Puma', 'Adidas', 'Vans']) // Mảng type
	useEffect(async () => {

        try {
            var res = await axios.get(`${Config.BaseUrl}category`)
            setTypes(res.data);
        } catch (error) {
            console.error(error)
        }
        types.forEach(type => {
            setData((prev) => ({
                ...prev,
                [type.name]: typesProduct[type.name]
            }));
        });
	}, [types]);


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
				{types.map((item,index) => 
                    <ProductList key={index} data={data[item.name]} btnSeeMore={true} horizontal={true} type={item.name} />
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
