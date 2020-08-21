import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';


const mSTP = ( state ) => {
    // debugger
    return {
        errors: state.errors.session,
        // formType: 'login',
        // navLink: <Link to="/signup">Sign Up!</Link>,
    };
};

const mDTP = dispatch => {
    return {
        // processForm: (user) => dispatch(login(user)),
        signupForm: user => dispatch(signup(user)),
        loginForm: user => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);



