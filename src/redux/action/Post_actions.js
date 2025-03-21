import { api } from "../../Apis/Apis";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

export const fetchPosts = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const data = await api.getUserPosts(userId);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
