import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../base/Header";
import { useIsFocused } from "@react-navigation/native";
import { Convert } from "../../../utils/Convert";

const Gender = ({ navigation, route }) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const isFocused = useIsFocused()
    
    const save = () =>{
        Convert.saveFieldProfile("gender", selectedValue);
    }

    /**
	 * Xử lý focus input mỗi khi màn hình được focus
	 */
	useEffect(() => {
        // TODO fullName truyền từ profile động
		setSelectedValue(route?.params?.value);
	}, [isFocused]);


	return (
		<View style={styles.wrapper}>
			<Header style={styles.header} header="Gender" haveBack={true}></Header>
			<Text style={styles.label}>Choose Gender</Text>
            <View style={styles.wrapperPicker}>
            <Picker
            style={styles.picker}
				selectedValue={selectedValue}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Nam" value="Nam" />
				<Picker.Item label="Nữ" value="Nữ" />
				<Picker.Item label="Khác" value="Khác" />
			</Picker>
            </View>
			
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.5}
				onPress={() => {save(); navigation.goBack()}}
			>
				<Text style={styles.textButton}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Gender;

const styles = StyleSheet.create({
	wrapper: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingTop: 116,
	},
    wrapperPicker: {
        height: 48,
        width: "100%",
        borderWidth: 1,
        borderColor: "#EBF0FF",
        justifyContent:"center"
    },
    picker: {
        width: "100%",
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
