import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/Post_item";
import { fetchPosts } from "../redux/action/Post_actions";
import { Skeleton } from "@rneui/themed";

const UserPostsScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(userId));
  }, [userId]);

  return (
    <View style={styles.container}>
      {loading ? (
        [...Array(10)].map((_, index) => (
          <View key={index} style={styles.skeletonContainer}>
            <Skeleton width="100%" height={100}  />
           </View>
        ))
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostItem post={item} onPress={() => navigation.navigate("PostDetails", { postId: item.id })} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  skeletonContainer: {
    marginBottom: 10,
    borderRadius:20,
    // padding: 10,
  },
});

export default UserPostsScreen;
