import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../components/account/Account";
import Address from "../components/account/address/Address"
import Order from "../components/account/order/Order";
import Name from "../components/account/profile/Name";
import Email from "../components/account/profile/Email";
import Gender from "../components/account/profile/Gender";
import Payment from "../components/account/payment/Payment"
import PhoneNumber from "../components/account/profile/PhoneNumber";
import ChangePassword from "../components/account/profile/ChangePassword";
import Profile from "../components/account/profile/Profile";
import Login from "../components/login/Login";
import OrderDetail from "../components/base/detail/OrderDetail";

const Stacks = createNativeStackNavigator();

function AccountNav() {
  return (
    <Stacks.Navigator initialRouteName="Account" screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Account" component={Account} />
        <Stacks.Screen name="Profile" component={Profile} />
        <Stacks.Screen name="Order" component={Order} />
        <Stacks.Screen name="Address" component={Address} />
        <Stacks.Screen name="Payment" component={Payment} />
        <Stacks.Screen name="Name" component={Name} />
        <Stacks.Screen name="Gender" component={Gender} />
        <Stacks.Screen name="Email" component={Email} />
        <Stacks.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stacks.Screen name="ChangePassword" component={ChangePassword} />
          <Stacks.Screen name="Login" component={Login} />
          <Stacks.Screen name="OrderDetail" component={OrderDetail} />
    </Stacks.Navigator>
  );
}

export default AccountNav;
