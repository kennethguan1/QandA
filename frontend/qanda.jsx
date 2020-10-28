import React from "react";
import ReactDOM from "react-dom";
import * as questionActions from "./actions/question_actions"; 
import * as sessionActions from './actions/session_actions'; 
import * as commentActions from "./actions/comment_actions"; 
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();                 //this needs to be up here for getstate to work

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // FOR TESTING

  window.createComment = commentActions.createComment;
  window.updateComment = commentActions.updateComment;
  window.deleteComment = commentActions.deleteComment;
  window.deleteQuestion = questionActions.deleteQuestion;
  window.updateQuestion = questionActions.updateQuestion;
  window.createQuestion = questionActions.createQuestion;
  window.fetchQuestions = questionActions.fetchQuestions;
  window.fetchQuestion = questionActions.fetchQuestion;
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.signup = sessionActions.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;

  // FOR TESTING

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});