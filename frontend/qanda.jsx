import React from "react";
import ReactDOM from "react-dom";
import * as api_util from './util/session_api_util';
import * as sessionActions from './actions/session_actions'; 
import * as questionActions from './actions/question_actions'; 
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

    // const store = configureStore();                 //this needs to be up here for getstate to work to work
    // window.login = api_util.login;
    // window.logout = api_util.logout;
    // window.signup = api_util.signup;

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.login = sessionActions.login;
    window.logout = sessionActions.logout;
    window.signup = sessionActions.signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});