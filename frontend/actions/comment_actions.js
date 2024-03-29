import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveCommentErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const removeCommentErrors = () => ({
    type: REMOVE_COMMENT_ERRORS,
})

export const receiveComment = (comment) => {
    // debugger;
  return {
  type: RECEIVE_COMMENT,
  comment,}
};

export const fetchComment = (commentId) => (dispatch) =>
  APIUtil.fetchComment(commentId).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
)

export const createComment = (comment) => (dispatch) => 
    APIUtil.createComment(comment)
        .then(() => { }, (err) => (                                                 //Don't need api call result or to call an action creator so this is left blank
            dispatch(receiveCommentErrors(err.responseJSON))
        ))

export const updateComment = comment => dispatch => 
    APIUtil.updateComment(comment)
        .then(() => { }, (err) => (
            dispatch(receiveCommentErrors(err.responseJSON))
        ))

export const deleteComment = comment => dispatch => 
    APIUtil.deleteComment(comment)
        .then(() => { }, (err) => (
            dispatch(receiveCommentErrors(err.responseJSON))
        ))