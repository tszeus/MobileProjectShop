import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Header from "../../base/Header";

const Name = ({}) => {
	return (
        <View styles={styles.wrapper}>
            <Header header="Name" haveBack={true}></Header>
            <View>
                <TextInput name="First Name"></TextInput>
            </View>
        </View>
        
        
	);
};

export default Name;

const styles = StyleSheet.create({
    wrapper: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
	},
});
