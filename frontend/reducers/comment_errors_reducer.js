import {
  REMOVE_COMMENT_ERRORS,
  RECEIVE_COMMENT_ERRORS,
} from "../actions/comment_actions";

const commentErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return Object.assign({}, oldState, {
        errors: action.errors,
      });
    case REMOVE_COMMENT_ERRORS:
      return Object.assign({}, oldState, {
        errors: [],
      });
    default:
      return oldState;
  }
};

export default commentErrorsReducer;