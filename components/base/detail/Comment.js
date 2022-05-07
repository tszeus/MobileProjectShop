import { Image, StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";

const Comment = () => {
  return (
    <>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={styles.title}>Review Product</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.seemoreBtn}>See more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rating}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4.5}
            starSize={16}
            starStyle={{}}
            fullStarColor={"#FFC833"}
          />
          <Text style={styles.avtRating}>4.5</Text>
          <Text style={styles.quantityReview}>(5 Review)</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerHeading}>
          <Image
            source={require("../../../static/images/Comment/ProfilePicture.png")}
            style={{ width: 48, height: 48 }}
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.name}>James Lawson</Text>
            <View style={styles.rating}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={4}
                starSize={16}
                starStyle={{}}
                fullStarColor={"#FFC833"}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerBody}>
          <Text style={styles.commentContainer}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
          <View style={styles.commentImg}>
            <Image
              source={require("../../../static/images/Adidas/4.webp")}
              style={styles.cmtImgBox}
            />
            <Image
              source={require("../../../static/images/Adidas/1.webp")}
              style={styles.cmtImgBox}
            />
            <Image
              source={require("../../../static/images/Adidas/3.webp")}
              style={styles.cmtImgBox}
            />
          </View>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.date}>December 10, 2020</Text>
        </View>
      </View>
    </>
  );
};

export default Comment;

const styles = StyleSheet.create({
  header: { marginTop: 24 },
  title: {
    fontSize: 14,
    lineHeight: 21,
    color: "#223263",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  seemoreBtn: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#40BFFF",
  },
  rating: {
    width: 120,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avtRating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9098B1",
    marginHorizontal: 6,
  },
  quantityReview: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#9098B1",
  },
  containerHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  name: {
    fontSize: 14,
    lineHeight: 21,
    color: "#223263",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  commentContainer: {
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: "#9098B1",
  },
  commentImg: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 12,
  },
  cmtImgBox: {
    marginRight: 10,
    borderRadius: 8,
    height: 72,
    width: 72,
  },
  date: {
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.5,
    color: "#9098B1",
  },
});
