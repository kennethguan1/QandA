import { combineReducers } from "redux";
import likeReducer from "./like_reducer";
import questionReducer from "./question_reducer";

const entitiesReducer = combineReducers({
  questions: questionReducer,
  likes: likeReducer
});

export default entitiesReducer;
