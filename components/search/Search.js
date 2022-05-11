import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useRef, useEffect } from "react";
import SearchModel from "./SearchModel";
const _ = require("lodash");
import { useIsFocused } from "@react-navigation/native";
import { Config } from "../../config/Config";
import { Convert } from "../../utils/Convert";
import { useNavigation, useRoute } from "@react-navigation/native";
import Sort from "./Sort";
import Filter from "./Filter";
import { SortEnum } from "../../commons/enums/sort.enum";
import homeApi from "../api/homeApi"

const Search = (clean = false) => {
	const navigation = useNavigation();
	const route = useRoute();
	const [keyword, setKeyword] = useState("");
	const [data, setData] = useState([]);
	const [notFound, setNotFound] = useState("");
	const [visible, setVisible] = useState(false);
	const [isShowSort, setIsShowSort] = useState(false);
	const [isShowFilter, setIsShowFilter] = useState(false);
	const [sortBy, setSortBy] = useState(SortEnum.TimeAsc);
	const [preSortBy, setPreSortBy] = useState(SortEnum.TimeAsc);
	const [preMin, setPreMin] = useState(null);
	const [preMax, setPreMax] = useState(null);
	const [min, setMin] = useState(null);
	const [max, setMax] = useState(null);
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
	 * clean screen mỗi lần focus vào màn
	 */
	const cleanScreen = function () {
		setData([]);
		setKeyword("");
        setMax(null);
        setMin(null);
        setPreMax(null);
        setPreMin(null);
        setPreSortBy(SortEnum.TimeAsc);
        setSortBy(SortEnum.TimeAsc);
		setVisible(false);
	};

	/**
	 * debounce search
	 * @author: PVTRONG (17/4/2022)
	 */
	const debounceSearch = useRef(
		_.debounce((nextValue) => handleSearch(nextValue), 500)
	).current;

	/**
	 * Gọi api search
	 * @param {*} value keyword
	 * @author: PVTRONG (17/4/2022)
	 */
	const handleSearch = async (value) => {
		try {
			var res = await homeApi.searchProduct({
				name: value,
				sort_by: sortBy,
                min: min,
                max: max
			});
			setData(res);
			setVisible(true);
		} catch (err) {
			setData([]);
			setNotFound("Có lỗi xảy ra vui lòng thử lại!");
			console.log(err);
		}
	};

	/**
	 * Xử lý focus input mỗi khi màn hình được focus
	 */
	useEffect(async () => {
		if (clean) cleanScreen();
		textInputRef.current.focus();
	}, [isFocused]);

    /**
	 * Xử lý focus input mỗi khi màn hình được focus
	 */
	useEffect(async () => {
		if (preSortBy != sortBy || min != preMin || preMax != max) {
			reloadScreen();
            setPreSortBy(sortBy)
            setPreSortBy(min)
            setPreSortBy(max)
		}
	}, [isShowSort, isShowFilter]);

	return (
		<>
			<View style={styles.searchPage}>
				{isShowSort && (
					<Sort
						setIsShowSort={setIsShowSort}
						setSortBy={setSortBy}
						sortBy={sortBy}
						isShowSort={isShowSort}
					></Sort>
				)}
				{isShowFilter && <Filter min={min} max={max} setMin={setMin} setMax={setMax} setIsShowFilter={setIsShowFilter}></Filter>}
				<View style={styles.searchBoxAndFilter}>
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
						{keyword.length > 0 && (
							<TouchableOpacity
								onPress={() => {
									setKeyword("");
								}}
								style={styles.clear}
							>
								<Ionicons style={styles.clearBtn} name="close"></Ionicons>
							</TouchableOpacity>
						)}
					</View>
					{visible && (
						<Icon
							onPress={() => {
								setIsShowSort(true);
							}}
							style={styles.sort}
							name="sort-ascending"
						></Icon>
					)}
					{visible && (
						<Icon
							onPress={() => {
								setIsShowFilter(true);
							}}
							style={styles.filter}
							name="filter-outline"
						></Icon>
					)}
				</View>
				<SearchModel
					reloadScreen={reloadScreen}
					visible={visible}
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
		borderColor: "#EBF0FF",
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		borderRadius: 5,
		height: 42,
		flex: 1,
	},
	inputSearch: {
		flex: 1,
		height: "100%",
		fontWeight: "bold",
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
		position: "absolute",
		right: 24,
	},
	clearBtn: {
		width: 42,
		height: 42,
		fontSize: 42,
		color: "#223263",
		opacity: 0.5,
	},
	searchBoxAndFilter: {
		flexDirection: "row",
		alignItems: "center",
	},
	sort: {
		marginHorizontal: 16,
		fontSize: 24,
		color: "#223263",
		opacity: 0.5,
	},
	filter: {
		fontSize: 24,
		color: "#40BFFF",
	},
});
