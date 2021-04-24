import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_LIKES,
} from '../actions/like_actions';

import { merge } from 'lodash';

const likeReducer = (oldState = {}, action) => {
  let newState = merge({}, oldState);
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
      case RECEIVE_LIKE:
        return {
          [action.like.id]: action.like,
        };
        case REMOVE_LIKE:
          delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default likeReducer;