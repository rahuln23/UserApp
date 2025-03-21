import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/action/Comment_actions";

const PostDetailsScreen = ({ route }) => {
  const { postId } = route.params;
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state) => state.comments);
  const { posts } = useSelector((state) => state.posts);
  
  const post = posts.find((p) => p.id === postId);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [postId]);

  return (
    <View style={styles.container}>
      {post ? (
        <View style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Post not found</Text>
      )}

      <Text style={styles.commentsTitle}>Comments ({comments.length})</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={{marginTop:100}}/>
      ) : comments.length === 0 ? (
        <Text style={styles.noCommentsText}>No comments available</Text>
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.commentName}>{item.name}</Text>
              <Text style={styles.commentEmail}>{item.email}</Text>
              <Text style={styles.commentBody}>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#ccc",
  },
  postContainer:{
    backgroundColor: "#E0E0E0",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily:'Poppins-Medium',
    color: "#333",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    fontFamily:'Poppins-Regular',
  },
  commentsTitle: {
    fontSize: 18,
    // marginBottom: 10,
    // textAlign: "center",
    fontFamily:'Poppins-Medium',
    marginHorizontal:10,
    marginTop: 5,
  },
  noCommentsText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  commentContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  commentName: {
    fontSize: 16,
    color: "#222",
    fontFamily:'Poppins-Bold',
  },
  commentEmail: {
    fontSize: 14,
    color: "#777",
    fontFamily:'Poppins-Regular',
  },
  commentBody: {
    fontSize: 14,
    color: "#444",
    marginTop: 5,
    fontFamily:'Poppins-Regular',

  },
});

export default PostDetailsScreen;
