import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
} from "../actions/question_actions";

// import {
//   RECEIVE_LIKE,
//   REMOVE_LIKE,
//   RECEIVE_LIKES,
// } from '../actions/like_actions';

import { merge } from 'lodash';

const questionReducer = (oldState = {}, action) => {
  
  let liker;
  let comment;
  let currentQuestion;
  let newState = merge({}, oldState);
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return {
        [action.question.id]: action.question,
      };
    case REMOVE_QUESTION:
      delete newState[action.questionId];
      return newState;
    default:
      return oldState;
  }
};

export default questionReducer;