import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const CustomInput = ({
  index,
  setIndexInput,
  isActive,
  value,
  setValue,
  placeholder,
  iconName,
  isHaveVisibility,
  autoFocus = false,
}) => {
  const renderVisibility = () => (
    <Pressable
      onPress={() => {
        setIsVisibility(!isVisibility);
      }}
      style={styles.visibilityIcon}
    >
      {isVisibility ? (
        <MaterialIcons
          name="visibility"
          color={isActive ? "#40BFFF" : "#EBF0FF"}
          size={24}
        />
      ) : (
        <MaterialIcons
          name="visibility-off"
          color={isActive ? "#40BFFF" : "#EBF0FF"}
          size={24}
        />
      )}
    </Pressable>
  );

  const [isVisibility, setIsVisibility] = useState(false);
  return (
    <View
      style={[
        { borderColor: isActive ? "#40BFFF" : "#EBF0FF" },
        styles.inputBox,
      ]}
    >
      <MaterialIcons
        name={iconName}
        color={isActive ? "#40BFFF" : "#9098B1"}
        size={24}
        style={styles.loginIcon}
      />
      <TextInput
      autoFocus={autoFocus}
        onFocus={() => setIndexInput(index)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9098B1"
        onChangeText={(text) => setValue(text)}
        secureTextEntry={isVisibility}
        style={styles.inputText}
      />
      {isHaveVisibility ? renderVisibility() : true}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
  },
  inputText: {
    width: "80%",
    color: "#9098B1",
    fontWeight: 'bold',
    fontSize: 14,
  },

  loginIcon: {
    marginRight: 10,
    marginLeft: 6,
  },
});
