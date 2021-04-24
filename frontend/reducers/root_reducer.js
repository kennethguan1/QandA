import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import questionReducer from "./question_reducer";
import likeReducer from './like_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  questions: questionReducer,
  likes: likeReducer,
});

export default rootReducer;