import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./navigation/AppNav";
// import ShopBottomNavigation from "./navigation/ShopBottomNav";

export default function App() {
  return (
    // <View>
    <AppNav style={styles.container} />
    /* <CategoryNav /> */
    /* </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
