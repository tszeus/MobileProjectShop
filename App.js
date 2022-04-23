import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./navigation/AppNav";
import CategoryNav from "./navigation/CategoryNav";
// import ShopBottomNavigation from "./navigation/ShopBottomNav";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

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
