import { combineReducers } from "redux";
import questionsReducer from "./questions_reducer";

const entitiesReducer = combineReducers({
  question: questionsReducer,
});

export default entitiesReducer;
