import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "../action/Comment_actions";

const initialState = { comments: [], loading: false };

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
