import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import questionErrorsReducer from "./question_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  questions: questionErrorsReducer,
  comment: commentErrorsReducer,
});

export default errorsReducer;
