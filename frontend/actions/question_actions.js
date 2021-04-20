import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const REMOVE_QUESTION_ERRORS = "REMOVE_QUESTION_ERRORS";

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question,
});

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const removeQuestion = (questionId) => ({
  type: REMOVE_QUESTION,
  questionId,
});

export const receiveQuestionErrors = (errors) => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors,
});

export const removeQuestionErrors = () => ({
  type: REMOVE_QUESTION_ERRORS,
});

export const fetchQuestions = (questions) => (dispatch) =>
  APIUtil.fetchQuestions(questions).then(                                       //promise for success and failure.
    (questions) => dispatch(receiveQuestions(questions)),
    (err) => dispatch(receiveQuestionErrors(err.responseJSON))
  );

export const fetchQuestion = (id) => (dispatch) =>
  APIUtil.fetchQuestion(id).then(
    (question) => dispatch(receiveQuestion(question)),
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
  APIUtil.deleteQuestion(question).then((question) =>
    dispatch(removeQuestion(question))
  );