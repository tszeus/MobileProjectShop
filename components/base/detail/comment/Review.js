import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import WriteReview from "./WriteReview";
import ReviewItem from "./ReviewItem";
import reviewsApi from "../../../api/reviewsApi";
import { useSelector } from "react-redux";

const Review = ({ id, avgVote }) => {
  const [reviews, setReviews] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [avgRate, setAvgRate] = useState(avgVote);
  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [page, setPage] = useState(1);
  const [isReviewed, setIsReviewed] = useState(false);

  const { user } = useSelector((state) => state.user);

  const checkUserReviewed = (array) => {
    array.forEach((item) => {
      if (item.user._id === user._id) {
        setIsReviewed(true);

        return;
      }
    });

    console.log(isReviewed);
  };

  useEffect(() => {
    let sum = 0;
    reviews.forEach((item) => {
      sum += item.rating;
    });
    setAvgRate(Math.round((sum / totalComments) * 10) / 10);
  }, [reviews]);

  // Get reviews
  useEffect(() => {
    fetchReviews();
  }, [page]);
  const fetchReviews = async () => {
    try {
      const reviewsList = await reviewsApi.getReview(id, page).finally(() => {
        setIsLoadingReview(false);
      });
      setTotalComments(reviewsList.total_comments);
      setReviews(reviewsList.data);
      checkUserReviewed(reviewsList.data);
    } catch (error) {
      console.log("Get reviews error");
    }
  };
  const deleteAComment = () => {
    setTotalComments(totalComments - 1);
  };
  const addNewComment = () => {
    setTotalComments(totalComments + 1);
  };

  return (
    <>
      {!isReviewed && (
        <WriteReview
          id={id}
          reviews={reviews}
          setReviews={setReviews}
          addNewComment={addNewComment}
          isDetail={true}
        />
      )}
      <View style={styles.header}>
        <View
          style={{
            marginBottom: 12,
          }}
        >
          <Text style={styles.title}>Review Product</Text>
        </View>
        <View style={styles.rating}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={avgRate}
            starSize={16}
            starStyle={{}}
            fullStarColor={"#FFC833"}
            emptyStarColor={"#EBF0FF"}
          />
          <Text style={styles.avtRating}>{avgRate || 0}</Text>
          <Text style={styles.quantityReview}>{totalComments} Reviews</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setPage((page) => page - 1);
            setIsLoadingReview(true);
          }}
        >
          <Text style={styles.seemoreBtn}>Prev page</Text>
        </TouchableOpacity>
        <Text style={{ color: "#9098B1", fontSize: 14, fontWeight: "bold" }}>
          {page}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setPage((page) => page + 1);
            setIsLoadingReview(true);
          }}
        >
          <Text style={styles.seemoreBtn}>Next page</Text>
        </TouchableOpacity>
      </View>
      {isLoadingReview ? (
        <ActivityIndicator />
      ) : (
        reviews.map((item, index) => {
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
              id={id}
            />
          );
        })
      )}
    </>
  );
};

export default Review;

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
});
