import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_SESSION_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { errors: action.errors };
    case REMOVE_SESSION_ERRORS:
      return Object.assign({}, oldState, {
        errors: [],
      });
    case RECEIVE_CURRENT_USER:
      return { currentUser: [] };
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;