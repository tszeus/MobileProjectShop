import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./../components/account/Account"
import Address from "./../components/account/address/Address"
import Order from "./../components/account/order/Order";
import Payment from "./../components/account/payment/Payment";
import Name from "./../components/account/profile/Name";
import Profile from "./../components/account/profile/Profile";
import Login from "../components/login/Login";

const Stacks = createNativeStackNavigator();

function AccountNav() {
  return (
    <Stacks.Navigator
      initialRouteName="Account"
      screenOptions={{ headerShown: false }}
    >
      <Stacks.Screen name="Account" component={Account} />
      <Stacks.Screen name="Profile" component={Profile} />
      <Stacks.Screen name="Order" component={Order} />
      <Stacks.Screen name="Address" component={Address} />
      <Stacks.Screen name="Name" component={Name} />
          <Stacks.Screen name="Login" component={Login} />
    </Stacks.Navigator>
  );
}

export default AccountNav;
