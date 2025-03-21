import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action/User_actions";
import UserItem from "../components/User_item";
import { Skeleton } from "@rneui/themed";

const UsersScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users);
    const [searchText, setSearchText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (!loading && users.length > 0) {
            setFilteredUsers(users);
        }
    }, [users, loading]);

    const handleSearch = (text) => {
        setSearchText(text);
        if (text.trim() === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                user.name.toLowerCase().includes(text.toLowerCase()) ||
                user.username.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    const ListEmptyComponent = () => {
        if (loading) return null;
        return (
            <View style={styles.emptyContainer}>
                <Image source={require("../assets/icons/user.png")} style={styles.emptyImage} />
                <Text style={styles.emptyText}>No users found with{"\n"}given name/username..</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search users by name or username..."
                value={searchText}
                onChangeText={handleSearch}
            />

            {loading ? (
                <View style={styles.skeletonWrapper}>
                    {[...Array(6)].map((_, index) => (
                        <View key={index} style={styles.skeletonContainer}>
                            <Skeleton animation="pulse" circle width={100} height={100} />
                            <View style={{ marginLeft: 10 }}>
                                <Skeleton animation="pulse" width={150} height={20} />
                                <Skeleton animation="pulse" width={100} height={15} style={{ marginTop: 5 }} />
                            </View>
                        </View>
                    ))}
                </View>
            ) : (
                <FlatList
                    data={filteredUsers}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <UserItem user={item} onPress={() => navigation.navigate("UserPosts", { userId: item.id, username: item.name })} />
                    )}
                // ListEmptyComponent={filteredUsers.length === 0 && !loading ? ListEmptyComponent : null}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 5,
    },
    searchBar: {
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 5,
        fontFamily: "Poppins-Medium",
        backgroundColor: "#fff",
    },
    skeletonWrapper: {
        padding: 15,
    },
    skeletonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    emptyImage: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },
    emptyText: {
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        color: "#555",
        marginTop: 10,
        textAlign: "center",
    },
});

export default UsersScreen;
