import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";


// import LoginScreen from "../screens/LoginScreen";
import BottomNav from "./ShopBottomNav";
import LoginNav from "./LoginNav";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyIdAction } from "../redux/actions/userActions";

const Nav = () => {
  const {user} = useSelector(state => state.user)
  const Stack = createStackNavigator();
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      console.log(token)
      if (token) {
        setToken(token);
        const  {_id} = jwt_decode(token);
        dispatch(getUserbyIdAction(_id));
      }
      else {
        console.log("Da dang xuat")
      }
    };
    fetchToken();
  }, [token]);

  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen  name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* {!token && <Stack.Screen name="LoginNav" component={LoginNav} />} */}
        {!user && <Stack.Screen name="LoginNav" component={LoginNav} /> }

      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

const AppNav = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
