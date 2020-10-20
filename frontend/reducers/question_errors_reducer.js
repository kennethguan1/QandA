import {
  REMOVE_QUESTION_ERRORS,
  RECEIVE_QUESTION_ERRORS,
} from "../actions/question_actions";

const questionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTION_ERRORS:
      return Object.assign({}, oldState, {
        errors: action.errors,
      });
    case REMOVE_QUESTION_ERRORS:
      return Object.assign({}, oldState, {
        errors: [],
      });
    default:
      return oldState;
  }
};

export default questionErrorsReducer;
