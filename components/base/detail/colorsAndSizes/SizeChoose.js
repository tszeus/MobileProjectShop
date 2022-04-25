import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SizeBox from "./SizeBox";

const SizeChoose = ({ data }) => {
  const [indexSize, setIndexSize] = useState(0);
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setIndexSize(index);
          }}
        >
          <SizeBox isActive={index === indexSize} num={item} key={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};
export default SizeChoose;

const styles = StyleSheet.create({});
