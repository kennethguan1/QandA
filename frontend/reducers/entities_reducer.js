import { combineReducers } from "redux";
import likeReducer from "./like_reducer";
import questionReducer from "./question_reducer";
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  questions: questionReducer,
  likes: likeReducer,
  users: usersReducer,
});

export default entitiesReducer;
