import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import questionErrorsReducer from "./question_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";
import replyErrorsReducer from "./reply_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducer,
  comment: commentErrorsReducer,
  reply: replyErrorsReducer
});

export default errorsReducer;