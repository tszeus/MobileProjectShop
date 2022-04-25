import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ColorBox from "./ColorBox";

const ColorChoose = ({ data }) => {
  const [indexColor, setIndexColor] = useState(0);
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setIndexColor(index);
          }}
        >
          <ColorBox isActive={index === indexColor} color={item} key={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};
export default ColorChoose;

const styles = StyleSheet.create({});
