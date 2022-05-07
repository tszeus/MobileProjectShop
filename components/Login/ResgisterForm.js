import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";

const ResgisterForm = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("Password");
  const onSignUpPressed = (data) => {
    navigation.navigate("BottomNav");
    console.log(data);
  };
  const [indexInput, setIndexInput] = useState(10);
  const handlerSetInput = (index) => {
    setIndexInput(index);
  };

  const inputs = ["FullName", "YourEmail", "Password", "PasswordAgain"];

  const renderInput = (inputName, index) => {
    switch (inputName) {
      case "FullName":
        return (
          <CustomInput
            control={control}
            rule={{ required: "Full name is required" }}
            name={inputName}
            key={index}
            index={index}
            setIndexInput={handlerSetInput}
            isActive={indexInput === index}
            placeholder="Full Name"
            iconName="person-outline"
          />
        );
      case "YourEmail":
        return (
          <CustomInput
            control={control}
            rule={{ required: "Your email is required" }}
            name={inputName}
            key={index}
            index={index}
            setIndexInput={handlerSetInput}
            isActive={indexInput === index}
            placeholder="Your email"
            iconName="mail-outline"
          />
        );
      case "Password":
        return (
          <CustomInput
            control={control}
            rule={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be minimum 6 characters long",
              },
            }}
            name={inputName}
            key={index}
            index={index}
            setIndexInput={handlerSetInput}
            isActive={indexInput === index}
            placeholder="Password"
            iconName="lock-outline"
            isHaveVisibility={true}
          />
        );
      case "PasswordAgain":
        return (
          <CustomInput
            control={control}
            rule={{
              validate: (value) => value === pwd || "Password is not match",
            }}
            name={inputName}
            key={index}
            index={index}
            setIndexInput={handlerSetInput}
            isActive={indexInput === index}
            placeholder="Password Again"
            iconName="lock-outline"
            isHaveVisibility={true}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.header}>
              <Image
                style={styles.logoPrimary}
                source={require("../../static/images/Vector_primary.png")}
              />
              <Text style={styles.welcome}>Let's Get Started</Text>
              <Text style={styles.title}>Create a new account</Text>
            </View>
            <View style={styles.loginForm}>
              {inputs.map((item, index) => renderInput(item, index))}

              <TouchableOpacity
                onPress={handleSubmit(onSignUpPressed)}
                style={styles.signInButton}
              >
                <Text style={styles.signInButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 12,
                }}
              >
                <Text style={styles.haveAAccount}>Have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.register}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResgisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
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
  loginInput: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
  },
  loginIcon: {
    marginRight: 10,
    marginLeft: 6,
  },
  loginInputText: {
    width: "80%",
  },
  visibilityIcon: { marginHorizontal: 10 },
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
