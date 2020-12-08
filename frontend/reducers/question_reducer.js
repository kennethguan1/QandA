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
    // case RECEIVE_LIKES:
    //   return action.likes;
    // case RECEIVE_LIKE:
    //   // console.log(newState);
    //   // console.log(Object.keys(newState)[0]);
    //   liker = action.like.author_id;
    //   comment = action.like.comment_id;
    //   currentQuestion = Object.keys(newState)[0];
    //   newState[currentQuestion].comments[comment].likers.push(liker);
    //   return newState;
    // case REMOVE_LIKE:
    //         // console.log(newState);
    //         // console.log(Object.keys(newState)[0]);
    //   liker = action.like.author_id;
    //   comment = action.like.comment_id;
    //   currentQuestion = Object.keys(newState)[0];
    //   const index = newState[currentQuestion].comments[comment].likers.indexOf(liker);
    //   newState[currentQuestion].comments[comment].likers.splice(index);
    //   return newState;
    default:
      return oldState;
  }
};

export default questionReducer;