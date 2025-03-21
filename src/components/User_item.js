import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";

const getRandomColor = () => {
    const colors = ["#E57373", "#F06292", "#BA68C8", "#64B5F6", "#4DB6AC", "#81C784", "#FFD54F"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getInitials = (fullName) => {
    const nameParts = fullName.trim().split(" ");
    if (nameParts.length >= 2) {
        return nameParts[0].charAt(0).toUpperCase() + nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    }
    return fullName.charAt(0).toUpperCase(); 
};


const UserItem = ({ user, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={(onPress)}>
            <View style={styles.row}>
                <Avatar
                    size={60}
                    rounded
                    titleStyle={styles.avatarTitle}
                    title={getInitials(user.name)} 
                    containerStyle={[styles.avatar, { backgroundColor: getRandomColor() }]}
                />
                <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>@{user.username}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default UserItem;
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 1,
        marginHorizontal:3
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        color: "#333",
        fontFamily: "Poppins-Bold",
    },
    username: {
        fontSize: 14,
        color: "#555",
        fontFamily: "Poppins-Light",
    },
    email: {
        fontSize: 14,
        color: "#777",
        fontFamily: "Poppins-Medium",
    },
    avatarTitle: {
        fontFamily:'Poppins-Medium' 
    },
});