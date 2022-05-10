import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewItem from "./ReviewItem";

const AllComments = ({ navigation, route }) => {
  const { reviews, setReviews, deleteAComment } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.goBackBox}
      >
        <MaterialIcons name="arrow-back-ios" style={styles.goBackIcon} />
        <Text style={styles.categoryName}>Detail</Text>
      </TouchableOpacity>
      <ScrollView style={styles.products}>
        {reviews.map((item, index) => {
          return (
            <ReviewItem
              avatar={item.user.avatar}
              key={index}
              fullName={item.user.fullName}
              rating={item.rating}
              content={item.content}
              userId={item.user._id}
              commentId={item._id}
              reviews={reviews}
              setReviews={setReviews}
              deleteAComment={deleteAComment}
              date={item.createdAt}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AllComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  goBackBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    marginTop: 5,
  },
  goBackIcon: {
    fontSize: 16,
    color: "#9098B1",
  },
  categoryName: {
    fontSize: 17,
    color: "#223263",
    fontWeight: "bold",
    marginLeft: 5,
  },
  products: {
    padding: 16,
  },
});
