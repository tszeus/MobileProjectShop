import HomeScreen from "../Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TypeFullProduct from "../Screens/TypeFullProduct";

const Stacks = createNativeStackNavigator();

function CategoryNav() {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Home" component={HomeScreen} />
      <Stacks.Screen name="TypeFullProduct" component={TypeFullProduct} />
    </Stacks.Navigator>
  );
}

export default CategoryNav;
