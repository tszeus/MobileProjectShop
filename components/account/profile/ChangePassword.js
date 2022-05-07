import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../base/Header";
import CustomInput from "../../login/CustomInput";
import { useIsFocused } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Convert } from "../../../utils/Convert";

const ChangePassword = ({ navigation, route }) => {
	const [index, setIndex] = useState(1);
	const [newPassword, setNewPassword] = useState();
	const [oldPassword, setOldPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [indexInput, setIndexInput] = useState(10);
    const isFocused = useIsFocused()
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const save = () =>{
        Convert.saveFieldProfile("password", newPassword);
    }

    /**
	 * Xử lý focus input mỗi khi màn hình được focus
	 */
	useEffect(() => {
        // TODO password truyền từ profile động
		setNewPassword("");
	}, [isFocused]);

	return (
		<View style={styles.wrapper}>
			<Header style={styles.header} header="ChangePassword" haveBack={true}></Header>
			<Text style={styles.label}>Old Password</Text>
            <CustomInput
				index={index}
				setIndexInput={setIndexInput}
				isActive={indexInput === index}
				value={oldPassword}
				setValue={setOldPassword}
				placeholder={"Old password"}
                autoFocus={true}
                rule={{
                    required: "Old password is required",
                    minLength: {
                      value: 6,
                      message: "Old password should be minimum 6 characters long",
                    },
                  }}
                control={control}
                name="old password"
                iconName="lock-outline"
                isHaveVisibility={true}
			></CustomInput>
            <Text style={styles.label}>New Password</Text>
            <CustomInput
				index={index}
				setIndexInput={setIndexInput}
				isActive={indexInput === index}
				value={newPassword}
				setValue={setNewPassword}
				placeholder={"New password"}
                rule={{
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "New password should be minimum 6 characters long",
                    },
                  }}
                control={control}
                name="new password"
                iconName="lock-outline"
                isHaveVisibility={true}
			></CustomInput>
            <Text style={styles.label}>New Password Again</Text>
            <CustomInput
                rule={{
                    validate: (value) => value === newPassword || 'The passwords do not match',
                    required: "New password again is required",
                    minLength: {
                    value: 6,
                    message: "New password again should be minimum 6 characters long",
                    },
                }}
				index={index}
				setIndexInput={setIndexInput}
				isActive={indexInput === index}
				value={confirmPassword}
				setValue={setConfirmPassword}
				placeholder={"New password again"}
                control={control}
                name="confirm password"
                iconName="lock-outline"
                isHaveVisibility={true}
			></CustomInput>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.5}
				onPress={handleSubmit(() => {save(); navigation.goBack()})}
			>
				<Text style={styles.textButton}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChangePassword;

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
