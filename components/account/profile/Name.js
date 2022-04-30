import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../base/Header";
import CustomInput from "../../login/CustomInput";
import { useIsFocused } from "@react-navigation/native";

const Name = ({ navigation, route }) => {
	const [index, setIndex] = useState(0);
	const [fullNameNew, setFullNameNew] = useState();
	const [indexInput, setIndexInput] = useState(10);
    const isFocused = useIsFocused()

    const saveName = async () =>{
        try {
            // TODO lấy userId từ redux để bind động vào
			var res = await axios.get(`${Config.BaseUrl}/user/62640118bff0c1f05f6ea5de`, {
                fullName: fullNameNew
            });
            // TODO Cập nhật vào secure storage
		} catch (err) {
			console.log(err);
		}
    }

    /**
	 * Xử lý focus input mỗi khi màn hình được focus
	 */
	useEffect(() => {
        // TODO fullName truyền từ profile động
		setFullNameNew(route?.params?.fullName);
	}, [isFocused]);

	return (
		<View style={styles.wrapper}>
			<Header style={styles.header} header="Name" haveBack={true}></Header>
			<Text style={styles.label}>Full Name</Text>
			<CustomInput
				index={1}
				setIndexInput={setIndexInput}
				isActive={indexInput === 1}
				value={fullNameNew}
				setValue={setFullNameNew}
				placeholder={"Full Name"}
                autoFocus={true}
			></CustomInput>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.5}
				onPress={() => {saveName(); navigation.goBack()}}
			>
				<Text style={styles.textButton}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Name;

const styles = StyleSheet.create({
	wrapper: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingTop: 116,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#223263",
		marginBottom: 12,
	},
	button: {
		marginTop: 16,
		backgroundColor: "#40BFFF",
		width: "100%",
		padding: 16,
		alignItems: "center",
		borderRadius: 5,
		height: 57,
		justifyContent: "center",
		alignContent: "flex-end",
	},
	textButton: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
});
