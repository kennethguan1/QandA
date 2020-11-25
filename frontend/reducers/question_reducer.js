import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
} from "../actions/question_actions";

import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

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
    case RECEIVE_LIKE:
      liker = action.like.author_id;
      comment = action.like.comment_id;
      currentQuestion = Object.keys(newState)[0];
      newState[currentQuestion].comments[comment].likers.push(liker);
      // debugger
      return newState;
    case REMOVE_LIKE:
      liker = action.like.author_id;
      comment = action.like.comment_id;
      currentQuestion = Object.keys(newState)[0];
      const index = newState[currentQuestion].comments[comment].likers.indexOf(liker);
      newState[currentQuestion].comments[comment].likers.splice(index);
      // debugger
      return newState;
    default:
      return oldState;
  }
};

export default questionReducer;