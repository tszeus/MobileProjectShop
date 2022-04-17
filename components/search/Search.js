import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React,  {useState, useRef, useEffect} from "react";
import SearchModel from "./SearchModel";
import axios from 'axios'
const _ = require('lodash');
import { useIsFocused } from "@react-navigation/native";
import { Config } from "../../config/Config";
import { Convert } from "../../utils/Convert";

const Search = ({ navigation }) => {
	const [keyword, setKeyword] = useState("");
	const [data, setData] = useState([]);
	const [notFound, setNotFound] = useState("");
	const [visible, setVisible] = useState(true);
	const textInputRef = useRef(null);
	const isFocused = useIsFocused();

    /**
     * Xử lý khi input thay đổi
     * @param {*} param0 
     * @author: PVTRONG (17/4/2022)
     */
	const handleChange = ({ nativeEvent }) => {
		const { text } = nativeEvent;
		setKeyword(text);
		debounceSearch(text);
	};

    /**
     * reload lại khi dữ liệu bị thay đổi
     * @author: PVTRONG (17/4/2022)
     */
	const reloadScreen = function () {
		handleSearch(keyword);
	};

    /**
     * debounce search
     * @author: PVTRONG (17/4/2022)
     */
	const debounceSearch = useRef(
		_.debounce((nextValue) => handleSearch(nextValue), 1000)
	).current;

    /**
     * Gọi api search
     * @param {*} value keyword 
     * @author: PVTRONG (17/4/2022)
     */
	const handleSearch = async (value) => {
		try {
			var queryStr = Convert.objectToQueryString({
				q: value,
			});
			var res = await axios.get(`${Config.BaseUrl}products?${queryStr}`);
			const data = res.data;
			setData(data);
		} catch (err) {
			setNotFound("Có lỗi xảy ra vui lòng thử lại!");
			console.log(err);
		}
	};
    console.log(notFound)

    /**
     * Xử lý focus input mỗi khi màn hình được focus
     */
	useEffect(async () => {
		textInputRef.current.focus();
	}, [isFocused]);

    
	return (
		<>
			<View style={styles.searchPage}>
				<View style={styles.searchBox}>
					<View style={styles.searchIcon}>
						<Ionicons name="search" size={16} color="#40BFFF" />
					</View>
					<TextInput
                        ref={textInputRef}
						autoFocus={true}
						value={keyword}
						onChange={handleChange}
						style={styles.inputSearch}
						placeholder="Search Product"
						clearButtonMode="always"
					/>
					<TouchableOpacity onPress={() => setKeyword("")} style={styles.clear}>
                        <Ionicons style={styles.clearBtn} name="close"></Ionicons>
					</TouchableOpacity>
				</View>
				<SearchModel
					reloadScreen={reloadScreen}
					visible={true}
					data={data}
					notFound={notFound}
				></SearchModel>
			</View>
		</>
	);
};

export default Search;

const styles = StyleSheet.create({
	searchPage: {
		paddingHorizontal: 16,
		backgroundColor: "#fff",
		paddingTop: 50,
		height: "100%",
	},
	searchBox: {
		flexDirection: "row",
		width: "100%",
		borderColor: "#EBF0FF",
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		borderRadius: 5,
		height: 42,
	},
	inputSearch: {
		flex: 1,
		height: "100%",
        fontWeight: 'bold',
        color: "#223263",
        fontSize: 12,
	},
	searchIcon: {
		paddingHorizontal: 16,
	},
    clear: {
        height: 42,
        width: 42,
        zIndex: 10,
        position: 'absolute',
        right: 24,
    },
    clearBtn:{
        width: 42,
        height: 42,
        fontSize: 42,
        color: "#223263",
        opacity: 0.5
    }
});
