import { api } from "../../Apis/Apis";

export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";

export const fetchComments = (postId) => async (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST });
  try {
    const data = await api.getPostComments(postId);
    dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};
