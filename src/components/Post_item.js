import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PostItem = ({ post, onPress }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body} numberOfLines={2}>{post.body}</Text>

            <TouchableOpacity style={styles.viewFullPostContainer} onPress={onPress}>
                <Text style={styles.viewFullPostText}>View Full Post</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#E0E0E0",
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: "#222",
        fontFamily: "Poppins-Medium",
    },
    body: {
        fontSize: 14,
        color: "#444",
        marginTop: 5,
        fontFamily: "Poppins-Regular",
    },
    viewFullPostContainer: {
        alignSelf: "flex-end", 
        marginTop: 10,
    },
    viewFullPostText: {
        fontSize: 14,
        color: "#2DAA9E", 
        fontFamily: "Poppins-SemiBold",
    },
});

export default PostItem;
