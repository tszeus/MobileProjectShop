import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TypeFullProduct from "./../screens/TypeFullProduct";
import ProductDetail from "./../components/base/detail/ProductDetail";
import Search from "./../components/search/Search";
import ProductItem from "./../components/base/ProductItem";

const Stacks = createNativeStackNavigator();

function HomeNav() {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Home" component={HomeScreen} />
      <Stacks.Screen name="TypeFullProduct" component={TypeFullProduct} />
      <Stacks.Screen name="ProductDetail" component={ProductDetail} />
      <Stacks.Screen name="Search" component={Search} />
    </Stacks.Navigator>
  );
}

export default HomeNav;
