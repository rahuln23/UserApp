import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import UsersScreen from "../screens/Users_screen";
import UserPostsScreen from "../screens/User_posts_screen";
import PostDetailsScreen from "../screens/PostDetailsScreen";

const Stack = createStackNavigator();

// Custom header with Linear Gradient
const GradientHeader = ({ title }) => {
    return (
        <LinearGradient colors={["#27667B", "#2DAA9E"]} style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </LinearGradient>
    );
};

const AppNavigator = () => {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "transparent" },
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerTitleStyle: styles.headerTitle,
                    headerBackground: () => <GradientHeader />,
                }}
            >
                <Stack.Screen name="Users" component={UsersScreen}
                    options={{
                        headerTitle: "Users", headerTitleStyle: {
                            fontFamily: 'Poppins-Medium',
                        }
                    }} />
                <Stack.Screen name="UserPosts" component={UserPostsScreen}
                    options={({ route }) => ({
                        headerTitle: route.params?.username || "User Posts",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Medium',
                        }
                    })} />
                <Stack.Screen name="PostDetails" component={PostDetailsScreen}
                    options={({ route }) => ({
                        headerTitle: route.params?.username || "Posts Details",
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Medium',
                        }
                    })} />
            </Stack.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "Poppins-Bold",
    },
});

export default AppNavigator;
