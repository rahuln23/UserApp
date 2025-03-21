import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },

  getUserPosts: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  },

  getPostComments: async (postId) => {
    try {
      const response = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch comments");
    }
  },
};
