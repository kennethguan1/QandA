
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_LIKES,
} from '../actions/like_actions';

import { merge } from 'lodash';

const likeReducer = (oldState = {}, action) => {
  
  // let liker;
  // let comment;
  // let currentQuestion;
  let newState = merge({}, oldState);
  Object.freeze(oldState);

  switch (action.type) {

    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
    //   liker = action.like.author_id;
    //   comment = action.like.comment_id;
    //   currentQuestion = Object.keys(newState)[0];
    //   newState[currentQuestion].comments[comment].likers.push(liker);
      return {
        [action.like.id]: action.like,
      };
    case REMOVE_LIKE:
    //   liker = action.like.author_id;
    //   comment = action.like.comment_id;
    //   currentQuestion = Object.keys(newState)[0];
    //   const index = newState[currentQuestion].comments[comment].likers.indexOf(liker);
    //   newState[currentQuestion].comments[comment].likers.splice(index);
      delete newState[action.like];
      return newState;
    default:
      return oldState;
  }
};

export default likeReducer;