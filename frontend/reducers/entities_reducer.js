import { combineReducers } from "redux";
import questionReducer from "./question_reducer";

const entitiesReducer = combineReducers({
  questions: questionReducer,
});

export default entitiesReducer;
