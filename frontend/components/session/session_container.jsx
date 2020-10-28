import { connect } from 'react-redux';

import SessionForm from './session_form';
import {
  signup,
  login,
  removeSessionErrors,
} from "../../actions/session_actions";


const mSTP = ( state ) => {
    // debugger
    return {
        session_errors: state.errors.session,

    };
};

const mDTP = dispatch => {
    return {
      signupForm: (user) => dispatch(signup(user)),
      loginForm: (user) => dispatch(login(user)),
      removeSessionErrors: () => dispatch(removeSessionErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm);



