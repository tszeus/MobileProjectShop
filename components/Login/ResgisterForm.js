import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ResgisterForm = ({ navigation }) => {
  const [fullNameFocus, setFullNameFocus] = useState(false);
  const [mailInputFocus, setMailInputFocus] = useState(false);
  const [passInputFocus, setPassInputFocus] = useState(false);
  const [passAgainInputFocus, setPassAgainInputFocus] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logoPrimary}
          source={require("../../static/images/Vector_primary.png")}
        />
        <Text style={styles.welcome}>Let's Get Started</Text>
        <Text style={styles.title}>Create a new account</Text>
      </View>
      <View style={styles.loginForm}>
        {/* Full name -------------------------------------------------*/}
        <View
          style={[
            { borderColor: fullNameFocus ? "#40BFFF" : "#EBF0FF" },
            styles.loginInput,
          ]}
        >
          <MaterialIcons
            name="person-outline"
            color={!fullNameFocus ? "#9098B1" : "#40BFFF"}
            size={24}
            style={styles.loginIcon}
          />
          <TextInput
            value={fullName}
            placeholder="Full Name"
            placeholderTextColor="#9098B1"
            maxFontSizeMultiplier={12}
            onFocus={() => {
              setFullNameFocus(true);
              setMailInputFocus(false);
              setPassInputFocus(false);
              setPassAgainInputFocus(false);
            }}
            onChangeText={setFullName}
            textContentType="emailAddress"
            style={styles.loginInputText}
          />
        </View>
        {/* Email-------------------------------------------------- */}
        <View
          style={[
            { borderColor: mailInputFocus ? "#40BFFF" : "#EBF0FF" },
            styles.loginInput,
          ]}
        >
          <MaterialIcons
            name="mail-outline"
            color={!mailInputFocus ? "#9098B1" : "#40BFFF"}
            size={24}
            style={styles.loginIcon}
          />
          <TextInput
            value={email}
            placeholder="Your email"
            placeholderTextColor="#9098B1"
            maxFontSizeMultiplier={12}
            onFocus={() => {
              setFullNameFocus(false);
              setMailInputFocus(true);
              setPassInputFocus(false);
              setPassAgainInputFocus(false);
            }}
            onChangeText={setEmail}
            textContentType="emailAddress"
            style={styles.loginInputText}
          />
        </View>
        {/* Password -------------------------------------------- */}
        <View
          style={[
            { borderColor: passInputFocus ? "#40BFFF" : "#EBF0FF" },
            styles.loginInput,
          ]}
        >
          <MaterialIcons
            name="lock-outline"
            color={!passInputFocus ? "#9098B1" : "#40BFFF"}
            size={24}
            style={styles.loginIcon}
          />
          <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#9098B1"
            maxFontSizeMultiplier={12}
            onFocus={() => {
              setFullNameFocus(false);
              setMailInputFocus(false);
              setPassInputFocus(true);
              setPassAgainInputFocus(false);
            }}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.loginInputText}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={styles.visibilityIcon}
          ></TouchableOpacity>
        </View>
        {/* Password again */}
        <View
          style={[
            { borderColor: passAgainInputFocus ? "#40BFFF" : "#EBF0FF" },
            styles.loginInput,
          ]}
        >
          <MaterialIcons
            name="lock-outline"
            color={!passAgainInputFocus ? "#9098B1" : "#40BFFF"}
            size={24}
            style={styles.loginIcon}
          />
          <TextInput
            value={passwordAgain}
            placeholder="Password Again"
            placeholderTextColor="#9098B1"
            maxFontSizeMultiplier={12}
            onFocus={() => {
              setFullNameFocus(false);
              setMailInputFocus(false);
              setPassInputFocus(false);
              setPassAgainInputFocus(true);
            }}
            onChangeText={setPasswordAgain}
            secureTextEntry={true}
            style={styles.loginInputText}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={styles.visibilityIcon}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BottomNav");
            console.log(email + " " + password);
          }}
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

      {/* <Start /> */}
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
