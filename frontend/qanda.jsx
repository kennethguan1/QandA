import React from "react";
import ReactDOM from "react-dom";
import * as api_util from './util/session_api_util';
import * as sessionActions from './actions/session_actions'; 
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();                 //this needs to be up here to work
    // window.login = api_util.login;
    // window.logout = api_util.logout;
    // window.signup = api_util.signup;
    window.login = sessionActions.login;
    window.logout = sessionActions.logout;
    window.signup = sessionActions.signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});