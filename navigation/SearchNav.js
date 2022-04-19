import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/home/Home";

const Stacks = createNativeStackNavigator();

function SearchNav() {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Search" component={SearchScreen} />
    </Stacks.Navigator>
  );
}

export default CategoryNav;
