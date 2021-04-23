import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const REMOVE_QUESTION_ERRORS = "REMOVE_QUESTION_ERRORS";


//Regular action creators

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveQuestion = (question) => {
  // debugger;
  return {
  type: RECEIVE_QUESTION,
  question,}                                              //question: question
};

export const removeQuestion = (questionDelete) => ({
  type: REMOVE_QUESTION,
  questionDelete,
});


export const receiveQuestionErrors = (errors) => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors,
});

export const removeQuestionErrors = () => ({
  type: REMOVE_QUESTION_ERRORS,
});

//Thunk action creators

export const fetchQuestions = () => (dispatch) => 
  APIUtil.fetchQuestions().then(
    (questions) => dispatch(receiveQuestions(questions)),
    (err) => dispatch(receiveQuestionErrors(err.responseJSON))
  );

export const fetchQuestion = (questionId) => (dispatch) =>                     //pass parameter from components into our function then dispatch to APIUtil
  APIUtil.fetchQuestion(questionId).then(                                     //promise for success and failure.
    (question) => dispatch(receiveQuestion(question)),                //left side questions is api call result (jbuilder files if it exists) from the controller which is passed to the right side questions action creator
    (err) => dispatch(receiveQuestionErrors(err.responseJSON))
  );

export const createQuestion = (question) => (dispatch) =>
  APIUtil.createQuestion(question).then(
    (question) => dispatch(receiveQuestion(question)),
    (err) => dispatch(receiveQuestionErrors(err.responseJSON))
  );

export const updateQuestion = (question) => (dispatch) =>
  APIUtil.updateQuestion(question).then(
    (question) => dispatch(receiveQuestion(question)),
    (err) => dispatch(receiveQuestionErrors(err.responseJSON))
  );

export const deleteQuestion = (question) => (dispatch) =>
  APIUtil.deleteQuestion(question).then((questionDelete) =>
    dispatch(removeQuestion(questionDelete))
  );