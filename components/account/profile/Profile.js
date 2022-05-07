import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FieldProfileConstant } from "../../../commons/constants/field-profile.constant";
import Header from "../../base/Header";
import FieldProfile from "./FieldProfile";


const Profile = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<Header header="Profile" haveBack={true}></Header>
			<View style={styles.content}>
				<TouchableOpacity onPress={() => navigation.navigate("Name",{fullName: "Zeus"} )} style={styles.avatarAndName}>
					<Image
						style={styles.avatar}
						source={{
							uri: "https://res.cloudinary.com/thhh/image/upload/v1650387521/mwy0iafro8qz2b8dynad.jpg",
						}}
					></Image>
					<View style={styles.nameAndNickname}>
						<Text style={styles.name}>Zeus</Text>
						<Text style={styles.nickname}>@zeus_uet</Text>
					</View>
				</TouchableOpacity>
                <View>
                    {FieldProfileConstant.map((item, index) => <FieldProfile key={index} label={item.label} iconName={item.iconName} onPress={() => navigation.navigate(item.component )} value={item.value}></FieldProfile>)}
                </View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	wrapper: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
        paddingTop: 100
	},
	content: {
		flex: 1,
        paddingHorizontal: 16
	},
	avatarAndName: {
		flexDirection: "row",
		alignItems: "center",
        height: 72,
        marginTop: 24,
        marginBottom: 9
	},
	avatar: {
        height: 72,
        width: 72,
        borderRadius: 50,
        marginRight: 16
    },
	nameAndNickname: {},
	name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#223263",
    },
	nickname: {
        color: "#9098B1",
        fontSize: 12,
    },
});
