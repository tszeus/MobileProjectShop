import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { min } from "react-native-reanimated";

const Login = ({ navigation }) => {
  const [indexInput, setIndexInput] = useState(10);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handlerSetInput = (index) => {
    setIndexInput(index);
  };

  const onSignInPressed = (data) => {
    navigation.navigate("BottomNav");
    console.log(data);
  };
  const inputs = ["Email", "Password"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logoPrimary}
          source={require("../../static/images/Vector_primary.png")}
        />
        <Text style={styles.welcome}>Welcome to SuperShoes</Text>
        <Text style={styles.title}>Sign in to continue</Text>
      </View>
      <View style={styles.loginForm}>
        {inputs.map((item, index) =>
          item === "Email" ? (
            <CustomInput
              rule={{ required: "Your email is required" }}
              key={index}
              index={index}
              isActive={indexInput === index}
              setIndexInput={handlerSetInput}
              placeholder="Your Email"
              iconName="mail-outline"
              name="youremail"
              control={control}
            />
          ) : (
            <CustomInput
              rule={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be minimum 6 characters long",
                },
              }}
              key={index}
              index={index}
              setIndexInput={handlerSetInput}
              isActive={indexInput === index}
              placeholder="Password"
              isHaveVisibility={true}
              iconName="lock-outline"
              name="password"
              control={control}
            />
          )
        )}
        <TouchableOpacity
          onPress={handleSubmit(onSignInPressed)}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.orBox}>
          <Text style={styles.line}></Text>
          <Text style={styles.or}>OR</Text>
          <Text style={styles.line}></Text>
        </View>
        <TouchableOpacity style={styles.loginWith}>
          <Image
            source={require("../../static/images/login/Google.png")}
            style={styles.socialIconGoogle}
          />
          <Text style={styles.loginWithText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginWith}>
          <Image
            source={require("../../static/images/login/Vector.png")}
            style={styles.socialIconFacebook}
          />
          <Text style={styles.loginWithText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.haveAAccount}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: { alignItems: "center", marginTop: 50, marginBottom: 32 },
  logoPrimary: { width: 75, height: 72, marginBottom: 16 },
  welcome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#223263",
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  title: {
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: "#9098B1",
  },
  signInButton: {
    backgroundColor: "#40BFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  signInButtonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  orBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: 12,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#EBF0FF",
    width: "40%",
    height: 20,
  },
  or: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9098B1",
    height: 40,
    paddingTop: 10,
  },
  loginWith: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    marginBottom: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  socialIconFacebook: { marginLeft: 8, width: 14.3, height: 26 },
  socialIconGoogle: { width: 31.2, height: 31.2 },
  loginWithText: {
    width: "86%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: "#9098B1",
    marginRight: 16,
  },
  forgotPass: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#40BFFF",
    marginTop: 8,
    marginBottom: 5,
  },
  haveAAccount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9098B1",
    lineHeight: 18,
  },
  register: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#40BFFF",
    lineHeight: 18,
  },
});
