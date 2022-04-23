import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SuccessScreen from "../Screens/SuccessScreen";
import CartScreen from "./../Screens/CartScreen";
import ShipToScreen from "./../Screens/ShipToScreen";

const Stacks = createNativeStackNavigator();

function CartNav() {
  return (
    <Stacks.Navigator initialRouteName="Cart" >
      <Stacks.Screen name="Your Cart" component={CartScreen} />
      <Stacks.Screen name="ShipTo" component={ShipToScreen} />
      <Stacks.Screen name="Success" component={SuccessScreen} />
      {/* <Stacks.Screen name="ProductDetail" component={ProductDetail} /> */}
    </Stacks.Navigator>
  );
}

export default CartNav;
