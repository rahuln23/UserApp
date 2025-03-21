import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../action/Post_actions";

const initialState = { posts: [], loading: false };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
