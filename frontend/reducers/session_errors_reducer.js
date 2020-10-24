// import {
//   RECEIVE_SESSION_ERRORS,
//   REMOVE_SESSION_ERRORS,
// } from "../actions/session_actions";

// const sessionErrorsReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECEIVE_SESSION_ERRORS:
//       return Object.assign({}, oldState, {
//         errors: action.errors,
//       });
//     case REMOVE_SESSION_ERRORS:
//       return Object.assign({}, oldState, {
//         errors: [],
//       });
//     default:
//       return oldState;
//   }
// };

// export default sessionErrorsReducer;

import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;