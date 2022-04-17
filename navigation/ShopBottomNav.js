import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
// import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryNav from "./CategoryNav";
// import CategoryNav from "./CategoryNav";

const Tab = createBottomTabNavigator();

function BottomNav() {
  // console.log(navigation);
  return (
    <Tab.Navigator
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
        // tabBarla
      })}
    >
      <Tab.Screen
        name="home"
        component={CategoryNav}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarLabel: "Cart",
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
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
