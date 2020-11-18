import {
  REMOVE_REPLY_ERRORS,
  RECEIVE_REPLY_ERRORS,
} from "../actions/reply_actions";

const replyErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REPLY_ERRORS:
      return Object.assign({}, oldState, {
        errors: action.errors,
      });
    case REMOVE_REPLY_ERRORS:
      return Object.assign({}, oldState, {
        errors: [],
      });
    default:
      return oldState;
  }
};

export default replyErrorsReducer;