// import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TypeFullProduct from "./../Screens/TypeFullProduct";
import ProductListItem from "./../components/base/ProductListItem";
import ProductDetail from "./../components/base/ProductDetail";
import HomeScreen from "./../Screens/HomeScreen";

const Stacks = createNativeStackNavigator();

function CategoryNav() {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Home" component={HomeScreen} />
      <Stacks.Screen name="TypeFullProduct" component={TypeFullProduct} />
      <Stacks.Screen name="ProductDetail" component={ProductDetail} />
    </Stacks.Navigator>
  );
}

export default CategoryNav;
