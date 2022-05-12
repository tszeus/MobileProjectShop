import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import AccountNav from "./AccountNav";
import CartNav from "./CartNav";
import HomeNav from "./HomeNav";
import SearchNav from "./SearchNav";

const Tab = createBottomTabNavigator();

function BottomNav() {
  const { listCart } = useSelector((state) => state.cart);

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName = route.name;

          if (route.name !== "account")
            return <Ionicons name={iconName} size={28} color={color} />;
          else
            return <MaterialIcons name="account-box" size={28} color={color} />;
        },
        tabBarActiveTintColor: "#40BFFF",
        tabBarInactiveTintColor: "#9098B1",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 10,
          paddingBottom: 10,
          height: 70,
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeNav}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchNav}
        options={{
          tabBarLabel: "Search",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartNav}
        options={() =>
          listCart.length > 0
            ? {
                tabBarBadge: listCart.length,
                tabBarLabel: "Cart",
                tabBarLabelStyle: {
                  fontSize: 14,
                },
              }
            : {
                tabBarLabel: "Cart",
                tabBarLabelStyle: {
                  fontSize: 14,
                },
              }
        }
      />
      <Tab.Screen
        name="account"
        component={AccountNav}
        options={{
          tabBarLabel: "Account",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
