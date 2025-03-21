import { combineReducers } from "redux";
import userReducer from "./User_reducer";
import postReducer from "./Post_reducer";
import commentReducer from "./Comment_reducer";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
