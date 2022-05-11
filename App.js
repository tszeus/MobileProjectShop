import { LogBox, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import AppNav from "./navigation/AppNav";
import { store } from "./redux/store";


LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {

  
  return (
    // <View>
    <Provider store={store}>
      <AppNav style={styles.container} />
    </Provider>

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
